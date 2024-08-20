
const groundingTechniques = [
  {
    id: 1,
    name: 'Try the 5-4-3-2-1 Method',
    description: [
      { 
        text: '5 things you can see', 
        image: require('../assets/groundingImages/technique1.png'),
        explanation: 'Look around and notice five things in your surroundings. Describe each item briefly, like a plant, painting, or something simple like a plugged-in charger.',
      },
      { 
        text: '4 things you can touch', 
        image: require('../assets/groundingImages/technique2.png'),
        explanation: 'Pay attention to four things you can feel, such as the texture of your clothes or a gentle breeze. Close your eyes if that helps you focus.',
      },
      { 
        text: '3 things you can hear', 
        image: require('../assets/groundingImages/technique5.png'),
        explanation: 'Listen for three distinct sounds, like distant traffic or a low hum from an appliance. Notice their different qualities as you focus on each one.',
      },
      { 
        text: '2 things you can smell', 
        image: require('../assets/groundingImages/technique4.png'),
        explanation: 'Tune into your sense of smell and identify two scents, like the aroma of food or an air freshener. If its hard to find smells, try sniffing nearby items.',
      },
      { 
        text: '1 thing you can taste', 
        image: require('../assets/groundingImages/technique3.png'),
        explanation: 'Focus on one thing you can taste, whether its a lingering flavor or imagined food. Close your eyes to enhance this final step of the grounding technique.',
      },
    ],
  },
  {
    id: 2,
    name: 'Hands in Water Technique',
    description: 'Focus on the water’s temperature as it touches your fingertips, palms, and the backs of your hands. Does it feel the same on each part? Try warm water first, then cold. Reverse the order and notice how the sensation changes when switching from cold to warm.',
    image: require('../assets/groundingImages/technique9.png'),
  },
  {
    id: 3,
    name: 'Sound Awareness Technique',
    description: 'Take a few moments to listen to the noises around you. Do you hear birds, barking dogs, or distant machinery? Notice if there are people talking—can you understand the language? Let the sounds wash over you, grounding you in the present moment and reminding you of your surroundings.',
    image: require('../assets/groundingImages/technique11.png'),
  },
  {
    id: 4,
    name: 'Deep Breathing Technique',
    description: 'Inhale and exhale slowly, focusing on your breath and silently thinking "in" and "out" to ground yourself.',
    timer: 120, 
    startButton: true, 
    endButton: true, 
    image: require('../assets/groundingImages/technique7.png'),
  },
  {
    id: 5,
    name: 'Mindful Walking Technique',
    description: 'Take a short walk and focus on each step. You can count your steps if it helps. Notice the rhythm of your footsteps and the sensation of your feet touching the ground and lifting again. Let your attention rest on the movement and connection with the earth.',
    image: require('../assets/groundingImages/technique10.png'),
  },
  {
    id: 6,
    name: 'Memory Challenge Technique',
    description: 'Look around and focus on a few objects in your environment. After a moment, close your eyes and try to recall as many details as you can. Then, either draw or write about what you remember. This exercise helps sharpen your focus and memory while grounding you in the present.',
    image: require('../assets/groundingImages/technique12.png'),
  },
  {
    id: 7,
    name: 'Recitation Technique',
    description: 'Think of a poem, song, or book passage you know by heart. Recite it quietly to yourself or in your mind. If you speak the words aloud, focus on how they feel on your lips and in your mouth. If you recite them silently, visualize each word as it would appear on a page.',
    image: require('../assets/groundingImages/technique13.png'),
  },
  {
    id: 8,
    name: 'Mindful Daily Tasks',
    description: 'Focus on the sensations and actions involved in everyday tasks like cooking, washing, or cleaning. Pay attention to textures, temperatures, and movements. When watching TV, concentrate on the details of what you’re viewing to stay grounded.',
    image: require('../assets/groundingImages/technique14.png'),
  },
  {
    id: 9,
    name: 'Pet Connection Technique',
    description: 'Sit quietly with your pet and focus on their presence. Notice their breathing, warmth, and the sensation of their fur or skin. Allow their companionship to help you feel calm and grounded.',
    image: require('../assets/groundingImages/technique8.png'),
  },
  {
    id: 10,
    name: 'Favorite Things Research',
    description: 'Research your favorite place, food, or object. Explore details such as its history, unique features, or personal significance. This focused exploration helps shift your attention and can be a calming, engaging activity.',
    image: require('../assets/groundingImages/technique15.png'),
  },
  {
    id: 11,
    name: 'Relaxing Shower or Bath',
    description: 'Take a relaxing shower or bath and focus on the sensation of water on your skin. Notice the temperature, pressure, and how it feels as it washes over you. Let the soothing experience help you unwind and ground yourself in the present.',
    image: require('../assets/groundingImages/technique18.png'),
  },
  {
    id: 12,
    name: 'Butterfly Hug Technique',
    description: 'Cross your arms over your chest and gently tap your shoulders with your fingers, mimicking the wings of a butterfly. Focus on the rhythmic, calming sensation of the taps. This self-soothing gesture can help you feel more centered and relaxed.',
    image: require('../assets/groundingImages/technique20.png'),
  },
  {
    id: 13,
    name: 'Backward Counting Technique',
    description: 'Count backward from 100 by 7s, or choose another simple math problem like adding or subtracting small numbers. Focus on each step and the pattern of the numbers. This mental exercise helps center your attention and calm your mind.',
    image: require('../assets/groundingImages/technique17.png'),
  },
  {
    id: 14,
    name: 'Ice Holding Technique',
    description: 'Hold a piece of ice and focus on the initial cold sensation. Notice how it feels against your skin and how long it takes to start melting. Pay attention to how the sensation changes as the ice warms and begins to melt.',
    image: require('../assets/groundingImages/technique19.png'),
  },
  {
    id: 15,
    name: 'Palms Rubbing Technique',
    description: 'Rub your palms together briskly, focusing on the warmth and texture of your skin to help ground yourself in the present moment.',
    timer: 60, 
    startButton: true, 
    endButton: true,
    image: require('../assets/groundingImages/technique16.png'),
  },
];

export default groundingTechniques;

