var ClozeCard = function(fullText, cloze, questionName){
		this.fullText = fullText;
		this.cloze = cloze.toLowerCase();
		this.questionName = questionName;
		this.partial = fullText.replace(cloze, "...");
};

module.exports = ClozeCard;