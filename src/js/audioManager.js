//管理歌曲
(function($,root) {
	function audioManager () {
		this.audio = new Audio();
		this.status = 'pause';
		this.bindEvent();
	}
	audioManager.prototype = {
		//绑定事件
		bindEvent:function(){
			$(this.audio).on('ended',function(){
				$scope.find('.next-btn').trigger('click');
			})
		},
		//歌曲播放功能
		play: function () {
			this.audio.play();
			this.status = "play";
		},
		//歌曲暂停功能
		pause: function() {
			this.audio.pause();
			this.status = "pause";
		},
		//切换歌曲的音频路径
		setAudioSource: function(src) {
			this.audio.src = src;
			this.audio.load();
		},
		jumptoPlay: function(duration){
			this.audio.currentTime = duration;
			this.play();
		}

	}
	root.audioManager = audioManager;
}(window.Zepto, window.player || (window.player = {})))


