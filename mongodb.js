const { ObjectID } = require('bson');
const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://root:MongoDB2019@127.0.0.1:27017/';
const databaseName = 'task-manager';

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function insertTasks(mongoClient, data) {
    
    const db = mongoClient.db(databaseName);

    db.collection('tasks').insertMany(data)
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        mongoClient.close();
        console.log('insertTasks finished!');
    });
}

async function insertOneUser(mongoClient, id) {
        
    const db = mongoClient.db(databaseName);

    db.collection('users').insertOne({
        _id: id,
        name: 'Vikram',
        age: 55
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        mongoClient.close();
        console.log('insertOneUser finished!');
    });
}

async function main(){
    
    const mongoClient = new MongoClient(connectionURL); 

    // const data = [
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ];
    
    // mongoClient.connect()
    //     .then((client) => insertTasks(client, data))
    //     .catch(console.error)
    //     .finally(() => console.log('Main finished!'));    

    // const id = new ObjectId();
    // console.log('ID:', id);
    // console.log('ID Timestamp:', id.getTimestamp());
    // mongoClient.connect()
    //     .then((client) => insertOneUser(client, id))
    //     .catch(console.error)
    //     .finally(() => console.log('Main finished!'));

    const db = mongoClient.db(databaseName);
    // db.collection('users').findOne({_id: new ObjectID('635b240767ed3d2904270734')})
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('findOneUser finished!');
    //     });

    // db.collection('users').find({age: 27}).toArray()
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('findUser finished!');
    //     });

    // db.collection('users').countDocuments({age: 27})
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('countUsers finished!');
    //     });

    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "_id": -1 }
    // };

    // db.collection('users').findOne(null, options)
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('findOneUser finished!');
    //     });

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID('635b22780975cafb6356c028')
    //     }, 
    //     {
    //         //$set: {name: 'Rodrigo'}
    //         $inc: {age: 1}
    //     })
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('updateOneUser finished!');
    //     });

    // db.collection('tasks').updateMany(
    //     {completed: false},
    //     {
    //         $set: {completed: true}
    //     })
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('updateManyTask finished!');
    //     });

    // db.collection('users').deleteMany({
    //         age: 27
    //     })
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {
    //         mongoClient.close();
    //         console.log('deleteManyTask finished!');
    //     });

    db.collection('tasks').deleteOne({
            description: 'Pot plants'
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            mongoClient.close();
            console.log('deleteOneTask finished!');
        });

    try {
        // Connect to the MongoDB cluster
        //await mongoClient.connect();
 
        // Make the appropriate DB calls
        //await listDatabases(mongoClient);
        
        // const value = await db.collection('users').insertOne({
        //     name: 'Halisson',
        //     age: 40,
        // });

        // console.log('Value:', value);

        // const many = await db.collection('users').insertMany([
        //     {
        //         name: 'Jen',
        //         age: 28
        //     },{
        //         name: 'Gunther',
        //         age: 27
        //     }
        // ]);

        // console.log('Many:', many);
        
    } catch (e) {
        console.error(e);
    } finally{
        //await mongoClient.close();
    }


    // db.collection('users').insertOne({
    //     name: 'Halisson',
    //     age: 40,
    // }).then((fulfilled) => {
    //     console.log(fulfilled.insertedId);
    //     console.log(fulfilled.acknowledged);
    //     console.log(fulfilled);
    //     console.log('Data insert data finished!');
    // }).catch((rejected) => {
    //     console.log(rejected);
    // }).finally(() => {
    //     mongoClient.close();
    //     console.log('Finally finished!');
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen Promesi',
    //         age: 28
    //     },{
    //         name: 'Gunther Promesi',
    //         age: 27
    //     }
    // ]).then((fulfilled) => {
    //     console.log('fulfilled:', fulfilled);
    // }).catch((rejected) => {
    //     console.log('rejected:', rejected);
    // }).finally(() => {
    //     mongoClient.close();
    //     console.log('Finally finished!');
    // });
}

main().catch(console.error);