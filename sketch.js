let state = "start"; // "start", "topics", "quiz", "result"
let startButton;
let currentTopic = "";
let currentQuestions = [];
let questionIndex = 0;
let selectedAnswers = [];
let showNextButton = false;
let answerColors = ["#e52356", "#54d14e", "#62c4ef", "#ffce00"];




let allQuestions = {
  "Zyklus": [
    { q: "Was ist der Menstruationszyklus?", a: ["Eine Reinigung", "Eine Krankheit", "Ein natürlicher Ablauf im Körper", "Ein Zufall"], correct: 2 },
    { q: "Wie viele Abschnitte hat der Menstruationszyklus?", a: ["zwei", "drei", "vier", "fünf"], correct: 2 },
    { q: "Wie lange dauert der Zyklus meistens?", a: ["7 Tage", "21 Tage", "28 Tage", "35 Tage"], correct: 2 },
    { q: "Wann passiert der Eisprung in enem Zyklus?", a: ["Ganz am Anfang", "In der Mitte", "Ganz am Ende", "Gar nicht"], correct: 1 },
    { q: "Was ist PMS?", a: ["Beschwerden vor der Periode", "Eine Herzkrankheit", "Eine schlimme Migräne", "Ein anderer Name für Bauchschmerzen"], correct: 0 },
    { q: "Was ist Endometriose?", a: ["Eine dauerhafte Frauenkrankheit", "Ein starkes Medikament", "Eine Tampon-Marke", "Das Ende der Pubertät"], correct: 0 },
    { q: "Welches ist kein Zeichen für Endometriose?", a: ["Übelkeit", "Starke Periodenschmerzen", "Rückenschmerzen", "Schüttelfrost"], correct: 3 },
    { q: "Was passiert bei Endometriose?", a: ["Normale Regelschmerzen", "Blutungen außerhalb der Gebärmutter", "Krebs", "Die Menopause beginnt"], correct: 1 },
    { q: "Was bedeutet Menopause?", a: ["Pause von der Periode", "Ende der Periode", "Midlife-Crisis", "Zeit vor der Pubertät"], correct: 1 },
    { q: "Was passiert bei der Menopause nicht?", a: ["Hitzewellen", "Laune verändert sich", "Keine Babys mehr bekommen", "Gar nichts"], correct: 3 }
  ],
  "Wochenbett": [
    { q: "Was ist das Wochenbett?", a: ["Ein Möbelstück", "Ein anderer Name für Elternzeit", "Die Erholungszeit nach der Geburt", "Ein Notfallbett"], correct: 2 },
    { q: "Wie lange dauert das Wochenbett meistens?", a: ["1 Woche", "2-3 Wochen", "6-8 Wochen", "16 Wochen"], correct: 2 },
    { q: "Was macht eine Frau im Wochenbett nicht?", a: ["Sich ausruhen", "Heilen und schlafen", "Sport machen", "Stillen"], correct: 2 },
    { q: "Wer hilft im Wochenbett?", a: ["Polizei", "Freunde", "Hebamme", "Hausarzt"], correct: 2 }
  ],
  "Schwangerschaft": [
    { q: "Wie lange ist eine Frau schwanger?", a: ["3 Monate", "6 Monate", "9 Monate", "12 Monate"], correct: 2 },
    { q: "Wo wächst das Baby?", a: ["Im Magen", "In der Gebärmutter", "In der Blase", "Im Kopf"], correct: 1 },
    { q: "Woran merkt man, dass man schwanger ist?", a: ["Schwangerschaftstest", "Keine Periode", "Müdigkeit", "Übelkeit"], correct: 0 },
    { q: "Wie viele Teile hat die Schwangerschaft?", a: ["zwei", "sechs", "drei", "neun"], correct: 2 },
    { q: "Was verändert sich bei einer schwangeren Frau?", a: ["Sie ist schneller müde", "Sie sieht schlechter", "Sie ist ungeduldiger", "Sie mag keinen Essig"], correct: 0 },
    { q: "Was verändert sich bei einer Schwangeren?", a: ["Haare wachsen mehr", "Hormone ändern sich", "Weniger Geschmack", "Kein Alkohol erlaubt"], correct: 1 },
    { q: "Was passiert mit der Blase in der Schwangerschaft?", a: ["Man riecht besser", "Man isst für zwei", "Man bekommt Flecken", "Man muss oft aufs Klo"], correct: 3 },
    { q: "Was passiert mit der Gebärmutter beim Babywachsen?", a: ["Atmen", "Spielen", "Rauchen", "Lesen"], correct: 2 },
    { q: "Wie groß ist die Gebärmutter normalerweise?", a: ["So groß wie ein Daumen", "So groß wie eine umgedrehte Birne", "So groß wie ein Hühnerei", "So groß wie eine Honigmelone"], correct: 1 },
    { q: "Wofür ist die Plazenta da?", a: ["um Platz zu schaffen für das Baby", "um das Baby zu verankern", "Um das Baby zu versorgen", "Damit das Baby atmen kann"], correct: 2 }
  ],
  "Hebamme": [
    { q: "Was ist eine Hebamme?", a: ["Ein Werkzeug", "Wie ein Frauenarzt", "Hilft bei der Geburt", "Ein Gerät"], correct: 2 },
    { q: "Was macht eine Hebamme zu Hause?", a: ["Kochen", "Fernsehen", "Hilft Schwangeren", "Musik spielen"], correct: 2 },
    { q: "Zahlt die Krankenkasse für eine Hebamme?", a: ["Ja", "Nein", "Nur manchmal", "Nur im Krankenhaus"], correct: 0 },
    { q: "Wo arbeitet eine Hebamme im Krankenhaus?", a: ["Im Zoo", "Im Krankenhaus", "Im Kino", "Im Park"], correct: 1 },
    { q: "Wer darf Hebamme werden?", a: ["Alle mit Hebammen-Studium", "Ärzte", "Pfleger", "Nur Frauen"], correct: 0 },
    { q: "Können Männer Hebamme werden?", a: ["Ja, sie heißen auch Hebamme", "Nein, nur wer Kinder kriegen kann", "Ja, dann heißen sie Entbindungspfleger", "Nur mit Sonderregeln"], correct: 0 },
    { q: "Wie wird man Hebamme?", a: ["Mit einer Ausbildung", "Mit einem Studium", "Mit Medizin-Studium", "Mit Fortbildung"], correct: 1 },
    { q: "Was darf man in der Schwangerschaft nicht?", a: ["Atmen", "Spielen", "Rauchen", "Lesen"], correct: 2 }
  ]
};

let logo;
let katImg1, katImg2, katImg3, katImg4;

function preload(){
  logo = loadImage("assets/Logo_Hebamme.png");
  katImg1 = loadImage("assets/Zyklus_Icon.png");
  katImg2 = loadImage("assets/Wochenbett_Icon.png");
  katImg3 = loadImage("assets/Schwangerschaft_Icon.png");
  katImg4 = loadImage("assets/Hebamme_Icon.png");
  


}

function setup() {
  createCanvas(window.innerWidth, window.windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  textWrap(WORD);

  let fs = fullscreen();
    if (!fs) fullscreen(true);
}

function draw() {
  background("#14303f");

  if (state === "start") {
    drawLogo();
    drawStartButton();
  } else if (state === "topics") {
    drawTopicButtons();
  } else if (state === "quiz") {
    drawQuestion();
  } else if (state === "result") {
    drawResult();
  }
}

function drawLogo() {
  image(logo,  width/2, height/2, 400, 400);
}

function drawStartButton() {
  fill(200);
  noStroke();
  rect(width / 2, height / 2 + 250, 200, 50, 15);
  fill(0);
  textFont('Basic Sans');
  textSize(32);
  text("Start", width / 2, height / 2 +250);
}


function drawTopicButtons() {
  let topics = ["Zyklus", "Wochenbett", "Schwangerschaft", "Hebamme"];
  
  image(katImg1, width * 0.2, height *0.4, 150, 150);
  image(katImg2, width * 0.4, height *0.4, 150, 150);
  image(katImg3, width * 0.6, height *0.4, 150, 150);
  image(katImg4, width * 0.8, height *0.4, 150, 150);

  fill(180);
  rect(width * 0.2, height *0.4 + 130, 150, 40, 15);
  rect(width * 0.4, height *0.4 + 130, 150, 40, 15);
  rect(width * 0.6, height *0.4 + 130, 150, 40, 15);
  rect(width * 0.8, height *0.4 + 130, 150, 40, 15);

  fill(0);
  textSize(20);
  text(topics[0], width * 0.2, height *0.4 + 130);
  text(topics[1], width * 0.4, height *0.4 + 130);
  text(topics[2], width * 0.6, height *0.4 + 130);
  text(topics[3], width * 0.8, height *0.4 + 130);
}


/*function drawQuestion() {
  let q = currentQuestions[questionIndex];

  // Frage
  fill(180);
  rect(2*width/4, height/4, width*3/4,250,15);
  fill(0);
  textSize(28);
  text(q.q, width / 2, 180, width - 80, 140);
  

  // Antwortfelder (2 links, 2 rechts)
  let positions = [
    [width / 4, height*2/3],
    [width / 4, 360],
    [3 * width / 4, height*2/3],
    [3 * width / 4, 360]
  ];


  let boxWidth = width / 2.5;
  let boxHeight = 100;
  textSize(22);

  for (let i = 0; i < 4; i++) {
  // Hintergrundfarbe
  fill(answerColors[i]);
  rect(positions[i][0], positions[i][1], boxWidth, boxHeight, 15);

  // Text zentriert zeichnen
  fill(0);
  textAlign(CENTER, CENTER);
  text((i + 1) + ": " + q.a[i], positions[i][0], positions[i][1], boxWidth - 20, boxHeight - 20);
}
}*/

function drawQuestion() {
  let q = currentQuestions[questionIndex];

  // Frage-Rechteck mit mehr Abstand
  stroke(84,208,78);
  noFill();
  let questionBoxY = height * 0.2; // etwas weiter oben
  let questionBoxH = 200;          // kompakter Höhe
  rect(width/2, questionBoxY, width * 0.8, questionBoxH, 15);
  noStroke();
  fill(255);
  textSize(40);
  text(q.q, width/2, questionBoxY, width * 0.8 - 40, questionBoxH - 40);

  // Antwortfelder – Nummerierung links oben (1), rechts oben (2), links unten (3), rechts unten (4)
  let positions = [
    // x, y
    [width * 0.3, height * 0.5], // 1 : links oben
    [width * 0.7, height * 0.5], // 2 : rechts oben
    [width * 0.3, height * 0.7], //3 : links unten
    [width * 0.7, height * 0.7] //4 : rechts unten
  ];

  let boxWidth = width * 0.35;
  let boxHeight = 100;
  textSize(30);

  for (let i = 0; i < 4; i++) {
    fill(answerColors[i]);
    rect(positions[i][0], positions[i][1], boxWidth, boxHeight, 15);

    // weiße, große Zahl links oben im Feld
    fill(255);
    textSize(48); // Größe Zahl
    textAlign(LEFT, TOP);
    let numX = positions[i][0] - boxWidth/2 + 10; // links im Feld, 10px Rand
    let numY = positions[i][1] - boxHeight/2 + 10; // oben im Feld, 10px Rand
    text((i+1), numX, numY);



    fill(0);
    textAlign(CENTER, CENTER);
    textSize(26);
    text( q.a[i],
         positions[i][0],
         positions[i][1],
         boxWidth - 20,
         boxHeight - 20);
  }
}



function drawResult() {
  
  fill(255);
  textSize(40);
  text("Du hast's geschafft!", width / 2, 100);

  let boxWidth = 140;
  let boxHeight = 140;
  let spacing = 40;
  let totalWidth = currentQuestions.length * boxWidth + (currentQuestions.length - 1) * spacing;
  let startX = (width - totalWidth) / 2 + boxWidth / 2;

  for (let i = 0; i < currentQuestions.length; i++) {
    let correctIndex = currentQuestions[i].correct;
    let c = answerColors[correctIndex];
    fill(c);
    let x = startX + i * (boxWidth + spacing);
    rect(x, 300, boxWidth, boxHeight, 20);
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text((correctIndex + 1), x, 300);
  }

  // Zurück-Button
  fill(180);
  rect(width / 2, height - 200, 200, 50, 15);
  fill(0);
  textSize(24);
  text("Zurück zum Start", width / 2, height - 200);
}

function mousePressed() {
  if (state === "start" && isInside(width / 2, height / 2 +250, 240, 80)) {
    state = "topics";


  } else if (state === "topics") {
    let topics = ["Zyklus", "Wochenbett", "Schwangerschaft", "Hebamme"];
    let xPositions = [width * 0.2, width * 0.4, width * 0.6, width * 0.8];
    let y = height * 0.4 + 130;

    for (let i = 0; i < topics.length; i++) {
      if (isInside(xPositions[i], y, 150, 40)) {
        currentTopic = topics[i];
        prepareQuestions(currentTopic);
        state = "quiz";
      }
  }


  } else if (state === "quiz") {
    let positions = [
      [width / 4, height*2/3],
      [3 * width / 4, height*2/3],
      [width / 4, 360],
      [3 * width / 4, 360]
    ];
  
    for (let i = 0; i < 4; i++) {
      if (isInside(positions[i][0], positions[i][1], 420, 80)) {
        // Nur eine Auswahl pro Frage erlauben
        if (selectedAnswers.length === questionIndex) {
          selectedAnswers.push(i);


          questionIndex++;
        
     // showNextButton = false;

      if (questionIndex >= 4) {
        state = "result";
      }
    
    }
  }

  }
}else if (state === "result" && isInside(width / 2, height - 200, 200, 50, 15)) {
    state = "start";
    questionIndex = 0;
    selectedAnswers = [];
    showNextButton = false;
  }
}

// Richtig platzierte prepareQuestions Funktion:
function prepareQuestions(topic) {
  if (topic === "Gemischt") {
    let topics = ["Zyklus", "Wochenbett", "Schwangerschaft", "Hebamme"];
    currentQuestions = topics.map(t => random(allQuestions[t]));
  } else {
    currentQuestions = shuffle(allQuestions[topic]).slice(0, 4);
  }
  questionIndex = 0;
  selectedAnswers = [];
  showNextButton = false;
}

function isInside(cx, cy, w, h) {
  return mouseX > cx - w / 2 && mouseX < cx + w / 2 && mouseY > cy - h / 2 && mouseY < cy + h / 2;
}



function keyPressed(){
  let fs = fullscreen();
    fullscreen(!fs);
}

let lastTouchTime = 0;

function touchStarted() {
  if (!fullscreen()) {
    fullscreen(true);  // Wenn z. B. über Homescreen geöffnet wurde
  }

  if (millis() - lastTouchTime > 400) {  // "Debounce" – verhindert Doppeltouch
    lastTouchTime = millis();
    mousePressed(); // leite an Mausfunktion weiter
  }

  return false; // Verhindert Scrollen
}