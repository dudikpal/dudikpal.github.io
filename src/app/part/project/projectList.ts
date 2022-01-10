/*

{
name: ,
thumbImage: ,
images: [],
title: ,
selectors:,
usedTechnology:,
projectUrl: ,
projectDetails:
}

 */

export const projectList = [
  {
    name: 'basemathgenerator',
    thumbImage: 'assets/img/portfolio/basemathgenerator-thumb.png',
    images: [
      'assets/img/portfolio/basemathgenerator.png',
      'assets/img/portfolio/basemathgenerator-2.png'
    ],
    title: 'Base mathematical training',
    selectors: 'filter-java filter-js',
    usedTechnology: 'Java (Spring Boot), JavaScript',
    projectUrl: 'https://basic-math-training.herokuapp.com/',
    projectDetails: `Generate basic mathematical expressions, like addition, subtraction, multiply and divide.
Help to the student in math learning, and training them.`
  },
  {
    name: 'quizgame-elementary',
    thumbImage: 'assets/img/portfolio/quizelementary-thumb.png',
    images: [
      'assets/img/portfolio/quizelementary.png',
      'assets/img/portfolio/quizelementary-2.png',
      'assets/img/portfolio/quizelementary-3.png',
      'assets/img/portfolio/quizelementary-mobile-1.png',
      'assets/img/portfolio/quizelementary-mobile-2.png',
      'assets/img/portfolio/quizelementary-mobile-3.png'
    ],
    title: 'Quiz game to training students',
    selectors: 'filter-java filter-js',
    usedTechnology: 'Java (Spring Boot), JavaScript, MongoDB (MongoCloud)',
    projectUrl: 'https://quizgame-elementary.herokuapp.com/',
    projectDetails: `
This "game" working with a database (MongoDB).
Has an admin page with password security (Spring Security),where the admin can create, update, and upload questions from file too, also create new category.`
  },
  {
    name: 'github-repositories',
    thumbImage: 'assets/img/portfolio/github-thumb.png',
    images: ['assets/img/portfolio/github.png'],
    title: 'Github repositories',
    selectors:'filter-java filter-js filter-csharp filter-ts',
    usedTechnology: 'Java, JavaScript, Typescript, C#, HTML, CSS',
    projectUrl: 'https://github.com/dudikpal',
    projectDetails: `In this place you can see all of my projects.
Including training assignments for courses, exams, challenge solutions, and my hobby projects.`
  }
];
