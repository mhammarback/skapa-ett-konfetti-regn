let colors = [
  'paleturquoise',
  'pink',
  'thistle2',
  'lightsteelblue',
  'white',
  'lightgoldenrod',
  'palegreen1',
  'peachpuff'
]

const chooseParticleColor = (groupName) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}

const bang = (addConfettiParticles) => {
// Ändra på dessa värden och se vad som händer!
  addConfettiParticles({
    groupName: 'lonely sad confetti',  // Valfritt namn på gruppen
    particleAmount: 200,  // Antal konfettipartiklar
    xPosition: 50,      // Position i procent av skärmens bredd, 0 är längst till vänster och 100 längst till höger
    yPosition: 50,      // Position i procent av skärmens höjd, 0 är längst ner och 100 högst upp
    xVelocity: 0,       // Hastighet i sidled, positiva värden åker åt höger och negativa åt vänster
    yVelocity: 2,       // Hastighet i höjdled, positiva värden åker uppåt och negativa värden nedåt
    xSpread: 80,        // Slumpmässig spridning på partikelns hastighet i sidled
    ySpread: 10         // Slumpmässig spridning på partikelns hastighet i höjdled
  })
}

export {
  chooseParticleColor,
  bang
}