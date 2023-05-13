const express = require( 'express' );
const bodyParser = require('body-parser')
const helmet = require('helmet');
const next = require('next')
const Newsletter = require('./newsletter');
const port = process.env.PORT || 6739;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const newsletter = new Newsletter();


app.prepare()
	.then( () => {
		const server = express();
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.use(helmet());

		server.all('*', (req, res) => {
			return handle(req, res);
		  });
		

		//API get all emails from LevelDB
         server.get( '/get', async ( req, res ) => {
		      await newsletter.getEmails().then((emails) => {
				app.render(req, res, '/faq');
			/* 	res.status(200).json({emails}); */
			  })
			  .catch((error) => {
				res.status(500).json({ error: error.message });
			  });
		} );


		// API to add email in  LevelDB
		server.post( '/add', async ( req, res ) => {
			const {email} = req.body
			if(!email) {
				res.status(500).json({ error: "email cannot by emty or null" });
			}
			await newsletter.insertEmail(email).then((response) => {
				const msg = response.message;
				res.status(response.code).json({msg});
	
			  })
			  .catch((error) => {
				res.status(500).json({ error: error.message });
			  });
		} );


		//Create server
		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			console.warn( `Ready on http://localhost:${port}` );
		} );
	} );