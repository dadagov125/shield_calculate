(function () {

	function minValueValidate(input) {
		const value = input.value;
		const min = input.min;
		return value && value >= min;
	}

	function validate(...args) {
		const send_btn = document.querySelector('#send_btn');
		for (let input of args) {
			if (!minValueValidate(input)) {
				send_btn.disabled = true;
				return
			}
		}
		send_btn.disabled = false;
	}

	document.addEventListener('DOMContentLoaded', function () {

		const filter_count = document.querySelector('#filter_count');
		const power = document.querySelector('#power');

		filter_count.oninput = () => validate(filter_count, power);
		power.oninput = () => validate(filter_count, power);

		const send_btn = document.querySelector('#send_btn');

		send_btn.onclick = () => {
			const formData = new FormData(document.querySelector('#form'));

			const data = {};
			for (var pair of formData.entries()) {
				data[pair[0]] = pair[1]
			}

			var ajax = new XMLHttpRequest();

			ajax.open('POST', 'calculate', false);

			ajax.setRequestHeader('Content-Type', 'application/json')
			ajax.send(JSON.stringify(data))
			alert(ajax.response);
		}
	})
})();
