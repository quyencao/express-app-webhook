const express = require('express');
const childProcess = require('child_process');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Success' })
});

app.post("/webhooks/github", function (req, res) {
    console.log('Someone has push code')
    // var branch = req.body.ref;

    // if(branch.indexOf('master') > -1){
        // deploy(res);
    // }
    // res.json({ message: 'Hook' })
})
  
// function deploy(res){
//     childProcess.exec(`cd ${__dirname} && ./deploy.sh`, function(err, stdout, stderr){
//         if (err) {
//             console.error(err);
//             return res.json(500);
//         }
//         res.json(200);
//     });
// }

app.listen(3000, () => console.log('Server is running...'));