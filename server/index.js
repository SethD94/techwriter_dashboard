let express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const fs  = require('fs');
const { report } = require('process');

const init = async () => {
    // instantiate rest app
    let app = express();
    
    // connect to the sql db
    const sequelize = new Sequelize('nzteam', 'mike.treadgold', 'mtnz99', {
        dialect: 'mysql',
        dialectOptions: {
            host: 'rekall',
            multipleStatements: true
            // Your mysql2 options here
        }
        })
    corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
        };
    app.use(cors(corsOptions));
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    app.get('/techwriters', async (req,res) => {
        // TODO: DO THIS HERE!
        const sql_script = fs.readFileSync('../sql_scripts/GetWriters.sql', 'utf8'); 
        const users = await sequelize.query(sql_script);
        const userdata = JSON.stringify(users);
        return res.json(userdata);
    });
    /*
    output= {
        writer_id: 12345,
        Writer: "Seth",
        Writer_avatar: img
        backlog_item_total: 1,
        work_due_soon_total: 16,
        ready_report_total: 10,
        work_on_the_horizon_total: 34,
        completed_tasks_total: 5;
            }
    */
    app.get('/techwriter/:ID', async (req,res) => {
        const { params } = req;
        function filterbyID(report){
            return report.writer_id === params.ID;
          }
        const backlog_script = fs.readFileSync('../sql_scripts/BacklogTasks.sql', 'utf8');
        const work_due_soon_script = fs.readFileSync('../sql_scripts/WorkDueSoonTasks.sql', 'utf8');
        const ready_report_script = fs.readFileSync('../sql_scripts/ReadyTasks.sql', 'utf8');
        const work_on_the_horizon_script = fs.readFileSync('../sql_scripts/WorkOnTheHorizon.sql', 'utf8');
        const backlog_query_response = await sequelize.query(backlog_script);
        const work_due_soon_query_response = await sequelize.query(work_due_soon_script);
        const ready_report_query_response = await sequelize.query(ready_report_script);
        const work_on_the_horizon_query_response = await sequelize.query(work_on_the_horizon_script);
        const total_backlog_tasks = backlog_query_response[0].filter(filterbyID).length;
        const total_work_due_soon_tasks = work_due_soon_query_response[0].filter(filterbyID).length;
        const total_ready_report_tasks = ready_report_query_response[0].filter(filterbyID).length;
        const total_work_on_the_horizon = work_on_the_horizon_query_response[0].filter(filterbyID).length;
        const output = {
            Backlog_Tasks: total_backlog_tasks,
            Work_Due_Soon_Tasks: total_work_due_soon_tasks,
            Ready_Tasks: total_ready_report_tasks,
            Work_On_The_Horizon: total_work_on_the_horizon
        }
        
        return res.json(output);
        
    });
    
    app.get('/test/', async (req,res) => {
        const sql_script = fs.readFileSync('../sql_scripts/WorkOnTheHorizon.sql', 'utf8'); 
        const workOnTheHorizon = await sequelize.query(sql_script); 
        return res.json(workOnTheHorizon[0]);
        
    });
    app.get('/BacklogTasks/:ID', async (req,res) => {
        const { params } = req;
        const sql_script = fs.readFileSync('../sql_scripts/BacklogTasks.sql', 'utf8'); 
        const Report = await sequelize.query(sql_script); 
        function filterbyID(report){
            return report.writer_id === params.ID;
          }
        const filteredReport = Report[0].filter(filterbyID)
          return res.json(filteredReport);
        
    });

    app.get('/WorkDueSoonTasks/:ID', async (req,res) => {
        const { params } = req;
        const sql_script = fs.readFileSync('../sql_scripts/WorkDueSoonTasks.sql', 'utf8'); 
        const Report = await sequelize.query(sql_script); 
        function filterbyID(report){
            return report.writer_id === params.ID;
          }
        const filteredReport = Report[0].filter(filterbyID)
          return res.json(filteredReport);
        
    });

    app.get('/ReadyTasks/:ID', async (req,res) => {
        const { params } = req;
        const sql_script = fs.readFileSync('../sql_scripts/ReadyTasks.sql', 'utf8'); 
        const Report = await sequelize.query(sql_script); 
        function filterbyID(report){
            return report.writer_id === params.ID;
          }
        const filteredReport = Report[0].filter(filterbyID)
          return res.json(filteredReport);
        
    });


    app.get('/WorkOnTheHorizon/:ID', async (req,res) => {
        const { params } = req;
        const sql_script = fs.readFileSync('../sql_scripts/WorkOnTheHorizon.sql', 'utf8'); 
        const Report = await sequelize.query(sql_script); 
        function filterbyID(report){
            return report.writer_id === params.ID;
          }
        const filteredReport = Report[0].filter(filterbyID)
          return res.json(filteredReport);
        
    });


    const PORT = 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
}

init()
