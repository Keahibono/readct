var wordCleanUp = {
	"Selfie" : "self-portrait",
	"yummers" : "delicious",
	"outchea" : "are out here",
	'bruh' : 'wow',
	'doge' : 'pug',
	'cilantro' : 'soap',
	'bae' : 'loved one',
	'swag' : 'style',
	'yolo' : 'carpe diem'
}

function filterWords (string){
	var sentArray = [];
	sentArray = string.split(" ");

	for (var word in wordCleanUp){
		var bad = wordCleanUp[word];
		var good = wordCleanUp[word].val();

		for (var i = 0; i < sentArray.length; i++){
			var questionableWord = sentArray[i];
			if(questionableWord === bad){
				sentArray.splice(i, 1, good);
			}
		}
	}
	return sentArray.join(" ");
}