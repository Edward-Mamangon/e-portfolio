const btn1 = document.getElementById('btnWork1');
const btn2 = document.getElementById('btnWork2');
const btn3 = document.getElementById('btnWork3');
const btn4 = document.getElementById('btnWork4');
const btn5 = document.getElementById('btnWork5');

let job = document.getElementById('work1');
let date = document.getElementById('date');
let desc = document.getElementById('description');
// let btn = document.querySelectorAll('.btn-work')

btn1.addEventListener('click', () => {
    job.textContent = work1.job;
    date.textContent = work1.date;
    desc.textContent = work1.desc;
    btn1.classList.add('btn-work-active');  
    btn2.classList.remove('btn-work-active');  
    btn3.classList.remove('btn-work-active');  
    btn4.classList.remove('btn-work-active');  
    btn5.classList.remove('btn-work-active');  
})

btn2.addEventListener('click', () => {
    job.textContent = work2.job;
    date.textContent = work2.date;
    desc.textContent = work2.desc;
    btn2.classList.add('btn-work-active');  
    btn1.classList.remove('btn-work-active');  
    btn3.classList.remove('btn-work-active');  
    btn4.classList.remove('btn-work-active');  
    btn5.classList.remove('btn-work-active');  
})

btn3.addEventListener('click', () => {
    job.textContent = work3.job;
    date.textContent = work3.date;
    desc.textContent = work3.desc;
    btn3.classList.add('btn-work-active');  
    btn1.classList.remove('btn-work-active');  
    btn2.classList.remove('btn-work-active');  
    btn4.classList.remove('btn-work-active');  
    btn5.classList.remove('btn-work-active');  
})

btn4.addEventListener('click', () => {
    job.textContent = work4.job;
    date.textContent = work4.date;
    desc.textContent = work4.desc;
    btn4.classList.add('btn-work-active');  
    btn1.classList.remove('btn-work-active');  
    btn2.classList.remove('btn-work-active');  
    btn3.classList.remove('btn-work-active');  
    btn5.classList.remove('btn-work-active');  
})

btn5.addEventListener('click', () => {
    job.textContent = work5.job;
    date.textContent = work5.date;
    desc.textContent = work5.desc;
    btn5.classList.add('btn-work-active');  
    btn1.classList.remove('btn-work-active');  
    btn2.classList.remove('btn-work-active');  
    btn3.classList.remove('btn-work-active');  
    btn4.classList.remove('btn-work-active');  
})


class Work {
    constructor(job, date, desc) {
        this.job = job;
        this.date = date;
        this.desc = desc;
    }

    showWork() {
        return `${this.job} ${this.date} ${this.desc} `;
    }
}

let work1 = new Work(
    "Graphic Designer/VA | Lone Palm, LLC",
    "January 2018 - April 2021",
    "Designed infographics, blog immages and social media ads for different clients to increase traffic to their website."
)

let work2 = new Work(
    "Graphic Designer/VA | Tennis Evolution",
    "January 2012 - April 2017",
    "I created and designed product images for my client's services and Tennis Course that includes sales funnel images and blog images.  Design web banner ads and other marketing assets. Provide day-to-day assistance like working on pdf files, Word documents and   Powerpoint slides"
)

let work3 = new Work(
    "Graphic Designer | Career of the Day Pty Ltd",
    "February 2014 - 2017",
    "Career of the Day is a company based in Australia providing services like industry experience, recruitment and international internships. I designed the company brochures, business cards and marketing materials."
)

let work4 = new Work(
    "Graphic Designer | Helsemin A/S",
    "October 2013 - April 2015",
    "Helsemin is based in Copenhagen, Denmark and runs a webshop that specializes in health and beauty products. I used to create their web banners, FB images, print flyers and brochures."
)

let work5 = new Work(
    "Graphic Designer | Model My Diet / Spot Communications",
    "April 2012 - July 2017",
    "I created the images and edited/manipulated product photos for their Virtual Fitting Room project. Another project is called Model My Diet, a virtual weight loss simulator. I collaborated by editing client's photos to simulate their desired weight"
)





// function showWork() {
//     let work = document.getElementById('work1')
//     work.style.display = "block";

//     // let job = document.getElementById('work1');
//     // let date = document.getElementById('date');
//     // let desc = document.getElementById('description');

//     // job.textContent = "Graphic Designer/VA | Lone Palm, LLC";
//     // date.textContent = "January 2018 - April 2021";
//     // desc.textContent = "Designed infographics for different clients to increase traffic to their website."
// }


