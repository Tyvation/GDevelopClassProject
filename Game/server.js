var express = require("express");
var server = express();

const Datastore = require('nedb-promises');
let gameDB= Datastore.create(__dirname+'/GameDB.db');

var bodyParser = require("body-parser");

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json())

server.get("/", (req,res)=>{
   console.log("connected");
});

server.post("/postscore", async (req,res)=>{
   const { PlayerName, Difficulty, ClearTime, Rating } = req.body;
   const leaderBoardList = {
      Easy:{}, Normal:{}, Hard:{}
   };

   try {
      const existingRecord = await gameDB.findOne({ PlayerName, Difficulty });

      if (!existingRecord) {
         // 沒有資料就直接插入
         await gameDB.insert({ PlayerName, Difficulty, ClearTime, Rating });
         console.log(`新增：${PlayerName} - ${Difficulty} - ${ClearTime}`);
      } else {
         // 如果新成績比較快，就更新
         if (ClearTime < existingRecord.ClearTime) {
            await gameDB.update(
               { _id: existingRecord._id },
               { $set: {"ClearTime": ClearTime, "Rating": Rating}}
            );
            console.log(`更新：${PlayerName} - ${Difficulty} - ${ClearTime}`);
         } else {
            console.log(`成績未更新（舊成績更快）：${PlayerName} - ${Difficulty} - ${existingRecord.ClearTime}`);
         }
      }

      const easyP = gameDB.find({ "Difficulty": "Easy" }).sort({ "ClearTime": 1 }).limit(10);
      const normalP = gameDB.find({ "Difficulty": "Normal" }).sort({ "ClearTime": 1 }).limit(10);
      const hardP = gameDB.find({ "Difficulty": "Hard" }).sort({ "ClearTime": 1 }).limit(10);

      const [easyResults, normalResults, hardResults] = await Promise.all([
         easyP, normalP, hardP
      ]);
      
      leaderBoardList.Easy = arrayToIndexObject(mergePlayerResults(easyResults));
      leaderBoardList.Normal = arrayToIndexObject(mergePlayerResults(normalResults));
      leaderBoardList.Hard = arrayToIndexObject(mergePlayerResults(hardResults));

      res.send(leaderBoardList);
      console.log("Success");
      console.log(leaderBoardList);

   } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
   }

});

server.get("/rank", async (req,res)=>{
   const leaderBoardList = {
      Easy:{}, Normal:{}, Hard:{}
   };
   try{
      const easyP = gameDB.find({ "Difficulty": "Easy" }).sort({ "ClearTime": 1 }).limit(10);
      const normalP = gameDB.find({ "Difficulty": "Normal" }).sort({ "ClearTime": 1 }).limit(10);
      const hardP = gameDB.find({ "Difficulty": "Hard" }).sort({ "ClearTime": 1 }).limit(10);

      const [easyResults, normalResults, hardResults] = await Promise.all([
         easyP, normalP, hardP
      ]);
      
      leaderBoardList.Easy = arrayToIndexObject(mergePlayerResults(easyResults));
      leaderBoardList.Normal = arrayToIndexObject(mergePlayerResults(normalResults));
      leaderBoardList.Hard = arrayToIndexObject(mergePlayerResults(hardResults));

      res.send(leaderBoardList);
      console.log(leaderBoardList);
      console.log("requested");

   } catch (err){
      console.error(err);
      res.status(500).json({ error: "Database error" });
   }
});

function mergePlayerResults(results) {
  const merged = {};
  results.forEach(entry => {
    const name = entry.PlayerName;
    if (!merged[name] || entry.ClearTime < merged[name].ClearTime) {
      merged[name] = entry;
    }
  });
  // 轉成陣列再排序
  return Object.values(merged).sort((a, b) => a.ClearTime - b.ClearTime);
}

function arrayToIndexObject(array){
   const result = {};
   array.forEach((entry, index) => {
      result[index] = {
         PlayerName: entry.PlayerName,
         FinishTime: entry.ClearTime,
         Rating: entry.Rating
      };
   });
   return result;
}
 
server.listen(80);
