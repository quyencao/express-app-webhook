const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Success Change!!!' })
});

app.post("/webhooks/github", function (req, res) {
    // var branch = req.body.ref;

    // if(branch.indexOf('master') > -1){
        deploy(res);
    // }
})
  
function deploy(res){
    childProcess.exec(`cd ${__dirname} && ./deploy.sh`, function(err, stdout, stderr){
        if (err) {
            console.error(err);
            return res.json(500);
        }
        res.json({ message: 200 });
    });
}

app.listen(3000, () => console.log('Server is running...'))