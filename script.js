let Teachers = [
  {
    Name: "Dr. Imran Malik",
    ID: "0",
    Position: "Assistant Professor",
    Qualification: "BSc,BScHons,MSc,PHD(Strutural Engineering)",
    Phone: "0300-9829890",
    Email: "imran@seecs.edu.pk",
    Linkedin: "malik@seecs.edu.pk",
    Research: "Research in Design Architects",
    Biography:
      "Dr. Imran Malik is a distinguished civil engineer and educator known for her contributions to structural engineering and seismic-resistant design. His career, shaped by a passion for both academia and practical application, spans decades of teaching, research, and consultancy work. Through his mentorship, emphasis on real-world applications, and advocacy for diversity in engineering, Dr. Imran has left an enduring impact on the field, inspiring future generations of engineers. His dedication extends beyond the classroom, where she actively promotes sustainable development and volunteers for community projects aimed at enhancing infrastructure in underserved areas",
  },
  {
    Name: "Habeel Ahmad",
    ID: "1",
    Position: "Head of Department",
    Qualification: "BSc,BScHons,MSc(Electronics)",
    Phone: "0324-3847561",
    Email: "habeel@seecs.edu.pk",
    Linkedin: "hahmad@seecs.edu.pk",
    Research: "Research in Control Systems",
    Biography:
      "Habeel Ahmad is an MSC Electrical Engineer with a focus on Control Systems. He earned his Bachelor's and Master's degrees from [University Name], specializing in control theory and advanced system design. In his career at [Company Name], Sir Habeel has excelled in developing and implementing innovative control algorithms for industrial automation, contributing to increased efficiency and reliability in various sectors. His expertise includes programming languages such as MATLAB, Simulink, and Python, and he is currently engaged in research on improving control systems for autonomous vehicles. Beyond his professional achievements, Habeel is passionate about STEM education and mentors aspiring engineers.",
  },
  {
    Name: "Ayesha Sarwar",
    ID: "2",
    Position: "Assistant Professor",
    Qualification: "BSc,Msc(CS)",
    Phone: "0332-09988705",
    Email: "asarwar@seecs.edu.pk",
    Linkedin: "asarwar@seecs.edu.pk",
    Research: "Research in different computer",
    Biography:
      "Ayesha Sarwar is an MSC Computer Scientist specializing in Artificial Intelligence and Machine Learning. She holds a Bachelor's and Master's degree in Computer Science from University. She honed his expertise in algorithms and AI. In her role as a Research Scientist at Tech Company Name, she has made significant contributions to natural language processing and computer vision projects, leveraging her skills in Python, Java, and C++. Her current focus involves advancing AI applications in healthcare for improved diagnostics and personalized medicine. Outside work, Ayesha enjoys hiking, playing the piano, and mentoring students interested in technology. She's also an advocate for ethical AI development.",
  },
];
let Students = [
  {
    Name: "Muhammad Abdullah",
    Status: "P",
    Email: "abdullah@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Ahmed Kumail",
    Status: "P",
    Email: "ahmed@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Muhammad Ali",
    Status: "P",
    Email: "ali@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Khurram Raza",
    Status: "P",
    Email: "khurram@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Abbas Ilyas",
    Status: "P",
    Email: "abbas@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Khursheed Ahmed",
    Status: "P",
    Email: "khursheed@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Muhammad Bilal",
    Status: "P",
    Email: "bilal@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Muhammad Umer",
    Status: "P",
    Email: "umer@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Nouman Ali",
    Status: "P",
    Email: "nouman@gmail.com",
    Password: "123456",
    Courses: "English",
  },
  {
    Name: "Babar Hussain",
    Status: "P",
    Email: "babar@gmail.com",
    Password: "123456",
    Courses: "English",
  },
];

let Abdullah = localStorage.getItem("Abdullah")
  ? JSON.parse(localStorage.getItem("Abdullah"))
  : {
      Name: "Muhammad Abdullah",
      Status: "P",
      Color: "lightGreen",
      Email: "abdullah@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Ahmed = localStorage.getItem("Ahmed")
  ? JSON.parse(localStorage.getItem("Ahmed"))
  : {
      Name: "Ahmed Kumail",
      Status: "P",
      Color: "lightGreen",
      Email: "ahmed@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Ali = localStorage.getItem("Ali")
  ? JSON.parse(localStorage.getItem("Ali"))
  : {
      Name: "Muhammad Ali",
      Status: "P",
      Color: "lightGreen",
      Email: "ali@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Khurram = localStorage.getItem("Khurram")
  ? JSON.parse(localStorage.getItem("Khurram"))
  : {
      Name: "Khurram Raza",
      Status: "P",
      Color: "lightGreen",
      Email: "khurram@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Abbas = localStorage.getItem("Abbas")
  ? JSON.parse(localStorage.getItem("Abbas"))
  : {
      Name: "Abbas Ilyas",
      Status: "P",
      Color: "lightGreen",
      Email: "abbas@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Khursheed = localStorage.getItem("Khursheed")
  ? JSON.parse(localStorage.getItem("Khursheed"))
  : {
      Name: "Khursheed Ahmed",
      Status: "P",
      Color: "lightGreen",
      Email: "khursheed@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Bilal = localStorage.getItem("Bilal")
  ? JSON.parse(localStorage.getItem("Bilal"))
  : {
      Name: "Muhammad Bilal",
      Status: "P",
      Color: "lightGreen",
      Email: "bilal@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Umer = localStorage.getItem("Umer")
  ? JSON.parse(localStorage.getItem("Umer"))
  : {
      Name: "Muhammad Umer",
      Status: "P",
      Color: "lightGreen",
      Email: "umer@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Nouman = localStorage.getItem("Nouman")
  ? JSON.parse(localStorage.getItem("Nouman"))
  : {
      Name: "Nouman Ali",
      Status: "P",
      Color: "lightGreen",
      Email: "nouman@gmail.com",
      Password: "123456",
      Courses: "English",
    };

let Babar = localStorage.getItem("Babar")
  ? JSON.parse(localStorage.getItem("Babar"))
  : {
      Name: "Babar Hussain",
      Status: "P",
      Color: "lightGreen",
      Email: "babar@gmail.com",
      Password: "123456",
      Courses: "English",
    };
//------------------------------------------------------------------------
function complaint() {
  prompt("Write you complaint below", "");
}
// ---------------------------------------------------------------------------
function signUpStudent() {
  let email = document.querySelector(".s1").value;
  let pass = document.querySelector(".s2").value;

  if (email === "abdullah@gmail.com" && pass === "123456") {
    window.location.href = "./AbdullahProfile.html";
  } else if (email === "ali@gmail.com" && pass === "123456") {
    window.location.href = "./AliProfile.html";
  } else {
    document.querySelector(".invalid").innerHTML = "Invalid Credentials";
  }
}

// ----------------------------Enroll Courses------------------------------

function popUp1(subjName) {
  let course_id = prompt("Enter Enrollement Key", "");

  if (course_id === "123456") {
    document.querySelector(".enrolled_container").innerHTML += `
        <div class="enrolled_item">${subjName}</div>
        `;
  }
}

//----------------------Teacher Login---------------------------------

function signUpTeacher() {
  let email = document.querySelector(".t1").value;
  let pass = document.querySelector(".t2").value;

  if (email === "teacher1@gmail.com" && pass === "123456") {
    window.location.href = "./facultypage.html";
  } else {
    document.querySelector(".invalid").innerHTML = "Invalid Credentials";
  }
}

//--------------------Attendance sheet--------------------------------
function attendance() {
  document.querySelector(".attendance_sheet").innerHTML = `
    
    <h1 class="main_heading">Attendance Sheet</h1>

    <div class="attendance_container">

        <div class="attendee">
           
        </div>

        <div class="attendance_student">
            <div class="student_sr">1</div>
            <div class="student_title">${Abdullah.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a1" style="background-color: ${Abdullah.Color}"  onclick="mark1();" >${Abdullah.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">2</div>
            <div class="student_title">${Ahmed.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a2" style="background-color: ${Ahmed.Color}"  onclick="mark2();">${Ahmed.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">3</div>
            <div class="student_title">${Ali.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a3" style="background-color: ${Ali.Color}"  onclick="mark3();">${Ali.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">4</div>
            <div class="student_title">${Khurram.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a4" style="background-color: ${Khurram.Color}"  onclick="mark4();">${Khurram.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">5</div>
            <div class="student_title">${Abbas.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a5" style="background-color: ${Abbas.Color}"  onclick="mark5();">${Abbas.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">6</div>
            <div class="student_title">${Khursheed.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a6" style="background-color: ${Khursheed.Color}"  onclick="mark6();">${Khursheed.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">7</div>
            <div class="student_title">${Bilal.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a7" style="background-color: ${Bilal.Color}"  onclick="mark7();">${Bilal.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">8</div>
            <div class="student_title">${Umer.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a8" style="background-color: ${Umer.Color}"  onclick="mark8();">${Umer.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">9</div>
            <div class="student_title">${Nouman.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a9" style="background-color: ${Nouman.Color}"  onclick="mark9();">${Nouman.Status}</button>
        </div>
        
        <div class="attendance_student">
            <div class="student_sr">10</div>
            <div class="student_title">${Babar.Name}</div>
            <div class="attendance_percentage">90%</div>
            <button class="attendance_button a10" style="background-color: ${Babar.Color}" onclick="mark10();">${Babar.Status}</button>
        </div>
        

        <div class="attendance_student">
            <button class="save_button" onclick="save();">Save</button>
            
        </div>
        
    </div>
    
    
    `;
}

let c = 10;

function mark1() {
  let elem = document.querySelector(".a1").innerHTML;
  if (elem === "P") {
    Abdullah.Status = "A";
    Abdullah.Color = "Salmon";
    document.querySelector(".a1").innerHTML = Abdullah.Status;
    document.querySelector(".a1").style.backgroundColor = Abdullah.Color;
    localStorage.setItem("Abdullah", JSON.stringify(Abdullah));
    return c--;
  } else if (elem === "A") {
    Abdullah.Status = "P";
    Abdullah.Color = "lightGreen";
    document.querySelector(".a1").innerHTML = Abdullah.Status;
    document.querySelector(".a1").style.backgroundColor = Abdullah.Color;
    localStorage.setItem("Abdullah", JSON.stringify(Abdullah));
  }
}
function mark2() {
  let elem = document.querySelector(".a2").innerHTML;
  if (elem === "P") {
    Ahmed.Status = "A";
    Ahmed.Color = "Salmon";
    document.querySelector(".a2").innerHTML = Ahmed.Status;
    document.querySelector(".a2").style.backgroundColor = Ahmed.Color;
    localStorage.setItem("Ahmed", JSON.stringify(Ahmed));
    return c--;
  } else if (elem === "A") {
    Ahmed.Status = "P";
    Ahmed.Color = "lightGreen";
    document.querySelector(".a2").innerHTML = Ahmed.Status;
    document.querySelector(".a2").style.backgroundColor = Ahmed.Color;
    localStorage.setItem("Ahmed", JSON.stringify(Ahmed));
  }
}
function mark3() {
  let elem = document.querySelector(".a3").innerHTML;
  if (elem === "P") {
    Ali.Status = "A";
    Ali.Color = "Salmon";
    document.querySelector(".a3").innerHTML = Ali.Status;
    document.querySelector(".a3").style.backgroundColor = Ali.Color;
    localStorage.setItem("Ali", JSON.stringify(Ali));
    return c--;
  } else if (elem === "A") {
    Ali.Status = "P";
    Ali.Color = "lightGreen";
    document.querySelector(".a3").innerHTML = Ali.Status;
    document.querySelector(".a3").style.backgroundColor = Ali.Color;
    localStorage.setItem("Ali", JSON.stringify(Ali));
  }
}
function mark4() {
  let elem = document.querySelector(".a4").innerHTML;
  if (elem === "P") {
    Khurram.Status = "A";
    Khurram.Color = "Salmon";
    document.querySelector(".a4").innerHTML = Khurram.Status;
    document.querySelector(".a4").style.backgroundColor = Khurram.Color;
    localStorage.setItem("Khurram", JSON.stringify(Khurram));
    return c--;
  } else if (elem === "A") {
    Khurram.Status = "P";
    Khurram.Color = "lightGreen";
    document.querySelector(".a4").innerHTML = Khurram.Status;
    document.querySelector(".a4").style.backgroundColor = Khurram.Color;
    localStorage.setItem("Khurram", JSON.stringify(Khurram));
  }
}
function mark5() {
  let elem = document.querySelector(".a5").innerHTML;
  if (elem === "P") {
    Abbas.Status = "A";
    Abbas.Color = "Salmon";
    document.querySelector(".a5").innerHTML = Abbas.Status;
    document.querySelector(".a5").style.backgroundColor = Abbas.Color;
    localStorage.setItem("Abbas", JSON.stringify(Abbas));
    return c--;
  } else if (elem === "A") {
    Abbas.Status = "P";
    Abbas.Color = "lightGreen";
    document.querySelector(".a5").innerHTML = Abbas.Status;
    document.querySelector(".a5").style.backgroundColor = Abbas.Color;
    localStorage.setItem("Abbas", JSON.stringify(Abbas));
  }
}
function mark6() {
  let elem = document.querySelector(".a6").innerHTML;
  if (elem === "P") {
    Khursheed.Status = "A";
    Khursheed.Color = "Salmon";
    document.querySelector(".a6").innerHTML = Khursheed.Status;
    document.querySelector(".a6").style.backgroundColor = Khursheed.Color;
    localStorage.setItem("Khursheed", JSON.stringify(Khursheed));
    return c--;
  } else if (elem === "A") {
    Khursheed.Status = "P";
    Khursheed.Color = "lightGreen";
    document.querySelector(".a6").innerHTML = "P";
    document.querySelector(".a6").style.backgroundColor = "lightGreen";
    localStorage.setItem("Khursheed", JSON.stringify(Khursheed));
  }
}
function mark7() {
  let elem = document.querySelector(".a7").innerHTML;
  if (elem === "P") {
    Bilal.Status = "A";
    Bilal.Color = "Salmon";
    document.querySelector(".a7").innerHTML = Bilal.Status;
    document.querySelector(".a7").style.backgroundColor = Bilal.Color;
    localStorage.setItem("Bilal", JSON.stringify(Bilal));
    return c--;
  } else if (elem === "A") {
    Bilal.Status = "P";
    Bilal.Color = "lightGreen";
    document.querySelector(".a7").innerHTML = Bilal.Status;
    document.querySelector(".a7").style.backgroundColor = Bilal.Color;
    localStorage.setItem("Bilal", JSON.stringify(Bilal));
  }
}
function mark8() {
  let elem = document.querySelector(".a8").innerHTML;
  if (elem === "P") {
    Umer.Status = "A";
    Umer.Color = "Salmon";
    document.querySelector(".a8").innerHTML = Umer.Status;
    document.querySelector(".a8").style.backgroundColor = Umer.Color;
    localStorage.setItem("Umer", JSON.stringify(Umer));
    return c--;
  } else if (elem === "A") {
    Umer.Status = "P";
    Umer.Color = "lightGreen";
    document.querySelector(".a8").innerHTML = Umer.Status;
    document.querySelector(".a8").style.backgroundColor = Umer.Color;
    localStorage.setItem("Umer", JSON.stringify(Umer));
  }
}
function mark9() {
  let elem = document.querySelector(".a9").innerHTML;
  if (elem === "P") {
    Nouman.Status = "A";
    Nouman.Color = "Salmon";
    document.querySelector(".a9").innerHTML = Nouman.Status;
    document.querySelector(".a9").style.backgroundColor = Nouman.Color;
    localStorage.setItem("Nouman", JSON.stringify(Nouman));
    return c--;
  } else if (elem === "A") {
    Nouman.Status = "P";
    Nouman.Color = "lightGreen";
    document.querySelector(".a9").innerHTML = Nouman.Status;
    document.querySelector(".a9").style.backgroundColor = Nouman.Color;
    localStorage.setItem("Nouman", JSON.stringify(Nouman));
  }
}
function mark10() {
  let elem = document.querySelector(".a10").innerHTML;

  if (elem === "P") {
    Babar.Status = "A";
    Babar.Color = "Salmon";
    document.querySelector(".a10").innerHTML = Babar.Status;
    document.querySelector(".a10").style.backgroundColor = Babar.Color;
    localStorage.setItem("Babar", JSON.stringify(Babar));
    return c--;
  } else if (elem === "A") {
    Babar.Status = "P";
    Babar.Color = "lightGreen";
    document.querySelector(".a10").innerHTML = Babar.Status;
    document.querySelector(".a10").style.backgroundColor = Babar.Color;
    localStorage.setItem("Babar", JSON.stringify(Babar));
  }
}

function save() {
  document.querySelector(".attendee").innerHTML = `
    <div>Total Number of Students: 10</div>
    <div>Students Present: ${c}</div>
    <div>Students Absent: ${10 - c}</div>

`;
}
