const questionsArray = [
    {
        q: 'What does HTML stand for?',
        ops: [
            'Hyper Trainer Marking Language', 
            'Hyper Text Marketing Language', 
            'Hyper Text Markup Language', 
            'Hyper Text Markup Leveler'],
        a: 'Hyper Text Markup Language',
    },
    {
        q: 'When was Javascript created?',
        ops: ['1993', '1995', '2012', '1989'],
        a: '1995',
    },
    {
        q: 'What is the most popular javascript framework/library?',
        ops: ['Vue', 'Angular', 'JQuery', 'React'],
        a: 'React',
    },
    {
        q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        ops: ['<script name="xxx.js">', '<script href="xxx.js">', '<script source="xxx.js">', '<script src="xxx.js">'],
        a: '<script src="xxx.js">',
    },
    {
        q: 'How do you write "Hello World" in an alert box?',
        ops: [
            'msg("Hello World")', 
            'alertBox("Hello World")', 
            'msgBox("Hello World")', 
            'alert("Hello World")'],
        a: 'alert("Hello World")',
    },
    {
        q: 'How do you call a function named "myFunction"?',
        ops: [
            'call myFunction', 
            'call myFunction()', 
            'myFunction()', 
            'call function myFunction()'],
        a: 'myFunction()',
    },
    {
        q: 'How does a FOR loop start?',
        ops: [
            'for i = 1 to 5', 
            'for(i <= 5; i++)', 
            'for(i= 0; i <= 5; i++)', 
            'for(i = 0; i <= 5)'],
        a: 'for(i= 0; i <= 5; i++)',
    },
    {
        q: 'How do you find the number with the highest value of x and y?',
        ops: [
            'ceil(x, y)', 
            'Math.ceil(x, y)', 
            'Math.max(x, y)', 
            'top(x, y)'],
        a: 'Math.max(x, y)',
    },
    {
        q: 'How can you add a comment in a JavaScript?',
        ops: [
            '<!--This is a comment-->', 
            '//This is a comment', 
            '$This is a comment',
            '*This is a comment'],
        a: '//This is a comment',
    },
    {
        q: 'JavaScript is the same as Java.',
        ops: [
            'True', 
            'False', 
            'Not sure', 
            'Google.com'],
        a: 'False',
    },
]

export default questionsArray
