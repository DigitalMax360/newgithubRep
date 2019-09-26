var identification = new Array('computer', 'software', 'devops');
var course = new Object();

function access() {
    course.dept = document.getElementById('input1').value;
    course.code = document.getElementById('input2').value;

    if(course.dept == identification[0] && course.code == 1000 ||
        course.dept == identification[1] && course.code == 1001 ||
        course.dept == identification[2] && course.code == 1002
        ) {
        console.log('Logged in');
        document.getElementById('displayCourse').innerHTML = course.dept;
        document.getElementById('Message').innerHTML = "START YOUR EXAMINATION";
    } else if (course.dept == identification[0] && course.code == '' ||
        course.dept == identification[1] && course.code == '' ||
        course.dept == identification[2] && course.code == ''
        ) {
        console.log('Invalid Input');
        document.getElementById('errorMessage').innerHTML = "INPUT YOUR COURSE CODE!!!";
    }
    else {
        alert('AUTHENTICATION ERROR!');
    }

}