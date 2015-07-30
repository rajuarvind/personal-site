var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext('2d'),
    particles = [],
    particleNum = 100,
    pull = 0.005,
    requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    }
    )();




//a way to generate and draw each particle
var particle = function() {
    this.x = (Math.random() * 1500);
    this.y = Math.random() * 300;
    this.radius = 1;
    this.vx = (Math.random() - 0.5) * 0.005;
    this.vy = (Math.random() - 0.5) * 0.005;
    animateParticle(this);
}

//a way to animate each particle
var animateParticle = function(p) {
    context.clearRect(0, 0, canvas.width, canvas.height);
	particles.forEach(function(p){
		context.beginPath();
		//context.arc(circle.x, circle.y, circle.radius, degree(0), degree(360), false);
		context.arc(p.x, p.y, p.radius, 0, 2*Math.PI, false);
		context.fillStyle = 'white';
		context.closePath();
		context.fill();
		changePosition(p);
        
	});	
    requestAnimationFrame(animateParticle);
    
}

var changePosition = function(p) {
    if (p.x < 0) {
        p.x = canvas.width;
        p.x -= p.vx;
    } else if (p.x > canvas.width) {
        p.x = 0;
        p.x += p.vx;
    }
    else {
        p.x += p.vx;
    }
    
    if (p.y < 0) {
        p.y = canvas.height;
        p.y += p.vy
    } else if (p.y > canvas.height) {
        p.y = 0;
        p.y += p.vy;
    }
    else {
        p.y += p.vy;
    }
}

var i = 0;
while (i < particleNum) {
    particles.push(new particle());
    i++;
}

//a way to draw lines between the particles

//choose the 50th one from the array

var neighbors = [],
    xdist = particles[40].x,
    ydist = particles[40].y;

/*var addNeighbors = function(x, y) {
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        var distance = Math.pow((Math.pow(x - particle.x, 2) + Math.pow(y - particle.y, 2)), 0.5);
        if (distance < 20) {
            neighbors.push(particle);
        }
    } 
}
            
var checkNeighbors = function(x, y) {
    for (var i = 0; i < neighbors.length; i++) {
        var particle = particles[i];
        var distance = Math.pow((Math.pow(x - particle.x, 2) + Math.pow(y - particle.y, 2)), 0.5);
        if (distance > 20) {
            neighbors.splice(i, 1);
        } 
    }

}

addNeighbors(xdist, ydist); 
checkNeighbors(xdist, ydist);

var drawFractal = function(x, y) {
    for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(neighbor.x, neighbor.y);
        context.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
        requestAnimationFrame(drawFractal(xdist, ydist));
    }
}*/

    

function magic(star1, star2) {
    var dx = star2.x - star1.x,
        dy = star2.y - star1.y,
        /* find distance accross x and y axes
           (hypotenuse of a right triangle) */
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 50) {

        // set global drawing properties
        //context.globalAlpha = (lineDist - dist) / lineDist;
        //context.strokeStyle = color;
        //context.lineWidth = 5;

        // draw line segment
        context.beginPath();
        context.moveTo(star1.x, star1.y);
        context.lineTo(star2.x, star2.y);
        context.lineWidth = 0.3;
        context.strokeStyle = '#ffffff';
        context.stroke();
        context.closePath();

        // calculate acceleration
        var ax = dx * pull,
            ay = dy * pull;

        // apply acceleration
        /*star1.vx += ax;
        star1.vy += ay;
        star2.vx -= ax;
        star2.vy -= ay;*/
    }
    
     
}


var loop = function() {
    
    for (var i = 0; i < particleNum; i++) {
        var first = particles[i];
        for (var j = 1; j < particleNum; j++) {
            var second = particles[j];
            magic(first, second);

            //requestAnimFrame(magic(first, second));
        }
    
     }
    
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.font = "60px Palatino";
    context.fillStyle = 'white';
    context.fillText("Arvind Raju",x, y);
    context.textAlign = 'center';
    requestAnimFrame(loop);
};
loop();

$(document).ready(function(){
    
    // Hide div 2 by default
    $('#myActivities').hide();

    $('#divSwitchActivities').click(function(){ 
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myActivities').show();
      $('#contact').addClass('disappear');
    });
    
    $('#myEducation').hide();

    $('#divSwitchEducation').click(function(){ 
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myEducation').show();
      $('#contact').addClass('disappear');

    });
    
    $('#myExperiences').hide();

    $('#divSwitchExperiences').click(function(){ 
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myExperiences').show();
      $('#contact').addClass('disappear');

    });
    
    $('#myAwards').hide();

    $('#divSwitchAwards').click(function(){ 
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myAwards').show();
      $('#contact').addClass('disappear');

    });
    
    $('#backActivities').click(function() {
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myActivities').hide();
      $('#contact').removeClass('disappear');

    });
    
     $('#backEducation').click(function() {
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myEducation').hide();
      $('#contact').removeClass('disappear');

    });
    
    $('#backExperiences').click(function() {
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myExperiences').hide();
      $('#contact').removeClass('disappear');

    });
    
    $('#backAwards').click(function() {
      $('#pennImg').animate({width: 'toggle'}, 150);
      $('#myAwards').hide();
      $('#contact').removeClass('disappear');

    });
    
    
    $('#divSwitchContact').click(function() {
        $('#contact').toggleClass('contactInactive');
        $('#contact').toggleClass('contactActive');
        $('.socialButton').toggleClass('disappear');
        $('#divSwitchContact').toggleClass('divSwitchContactInactive');
        $('#divSwitchContact').toggleClass('divSwitchContactActive');

    }); 
    

})

$(document).ready(function(){
    $('.row').hover(function(){
        $(this).toggleClass('blueText');
    });
})



                 




















