const User = require('../models/user');
const Query = require('../models/query');

const request_data = {
        
}

const response = {
        "data" : {
                "summary": "Under-19 world cup final: india lose australia virat kohli skips england series. toi ranji trophy: chhattisgarh bowlers bengal check visual stories ben stokes' best performances test cricket 10: hundreds t20 internationals",
                "sources": "['https://timesofindia.indiatimes.com/sports/cricket/news/ranji-trophy-chhattisgarh-bowlers-keep-bengal-under-check/articleshow/106995693.cms', 'https://timesofindia.indiatimes.com/sports/cricket/news/up-against-saurashtra-vidarbha-look-to-continue-winning-streak-in-ranji-trophy/articleshow/106966605.cms', 'https://timesofindia.indiatimes.com/sports/cricket/england-in-india/yashasvi-jaiswals-second-test-hundred-india-vs-england/articleshow/107351539.cms']",      
                "keywords": "[]",
                "suggestedPrompts": "[]"
            }
}
exports.createQuery = async (req,res) => {
        try {
                request_data.text = req.body.input;
                // console.log('input->',request_data.text);
                // const response = await axios.post('http://127.0.0.1:5000/ai-data', request_data, {
                //         headers: {
                //           'Content-Type': 'application/json'
                //         }
                // });
                
                // const obj = response.data.summary;
                // console.log(response.data);
                // obj.replaceAll('\"', ' ');
                const newEntry = new Query({
                        input:request_data.text,
                        summary:response.data.summary,
                        sources:response.data.sources,
                        keywords:response.data.keywords,
                        imageLinks:response.data.imageLinks
                })
                console.log(newEntry)
                await newEntry.save();

                return res.json({
                        success:true,
                        message:"New Query stored successfully",
                        newEntry
                })

        } catch (error) {
                console.log(error);
                return res.json({
                        success:false,
                        message:"Error while creating entry"
                })
        }
}

