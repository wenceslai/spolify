(function($) {
		$(document).ready(function() {

			// Pause/Play functionality
			var resetButton = $('.control-back'),
			album = $('.album');

			// Pause/Play functionality
			var playButton = $('.control-play'),
				album = $('.album');

			var audio = new Audio('mezi-delftem-a-prahou.mp3');

			$('.music-player-container').toggleClass('is-playing');


			playButton.on('click', function() {
				$('.music-player-container').toggleClass('is-playing');

				if ($('.music-player-container').hasClass('is-playing')) {
					audio.play();
				} else {
					audio.pause();
				}

			});

			resetButton.on('click', function() {
				audio.currentTime = 0;

			});

			document.getElementById('selectOption').addEventListener('change', function() {
				var selectedOption = this.value;
				if (selectedOption) {
				  window.location.href = selectedOption;
				}
			});

		});
	})(jQuery);