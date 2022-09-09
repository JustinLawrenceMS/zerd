import zerd from './zerd.json';

const question = document.getElementById('question');

const answer = document.getElementById('answer');

answer.addEventListener('keydown', function(e){


	if(e.key == 'Enter'){

		let val = answer.value.trim();

		setQuestion(val);

	}
		
});

function setQuestion(val){


		let if_answers = [];

		for(var i=0; i<zerd.length; i++){

			if_answers[i] = zerd[i].if_answer;


		}

		for(var i=0; i<if_answers.length; i++){

			if(val == if_answers[i]){

				answer.value = ' '.trim();
				question.innerHTML = zerd[i].then_question;
				setSiamorClick();
			}

		}

	}

/* Logic for css class zerd-btn
*
*/

function setSiamorClick(){

	let zerdBtns = document.getElementsByClassName('zerd-btn');

	if(zerdBtns){

		for(var i=0; i<zerdBtns.length; i++){

			if(zerdBtns[i].id == 'siamor-yes' ||
				zerdBtns[i].id == 'siamor-no'){
				zerdBtns[i].addEventListener('click', handleSiamor);
			}

		}

	}

}
function handleSiamor(){

	alert(this.id);

}
