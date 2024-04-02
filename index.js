document.getElementById('btnNao').addEventListener('click', function() {
    var leftPosition = Math.random() * (window.innerWidth - this.clientWidth);
    var topPosition = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = 'absolute';
    this.style.left = leftPosition + 'px';
    this.style.top = topPosition + 'px';
});

document.getElementById('btnSim').addEventListener('click', function() {
    document.getElementById('mensagemParabens').style.display = 'block';
});