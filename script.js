/* ── DEMO LAZY LOAD ── */
function loadDemo() {
  var preview = document.getElementById('demo-preview');
  var container = document.getElementById('demo-iframe-container');
  preview.classList.add('hidden');
  container.classList.add('active');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://johnscarrow.github.io/battleship-ml/?autoplay=1&muted=1';
  iframe.title = 'Battleship-ML Live Demo';
  iframe.allow = 'autoplay';
  container.appendChild(iframe);
}

/* ── WARGAMES MODAL ── */
var fab = document.getElementById('fab-btn');
var backdrop = document.getElementById('modal-backdrop');
var closeBtn = document.getElementById('close-modal');

fab.addEventListener('click', function() {
  backdrop.classList.add('open');
  document.getElementById('wg-input').focus();
});
closeBtn.addEventListener('click', function() {
  backdrop.classList.remove('open');
});
backdrop.addEventListener('click', function(e) {
  if (e.target === backdrop) backdrop.classList.remove('open');
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') backdrop.classList.remove('open');
});

var wgResponses = {
  'chess':        'INITIATING CHESS SEQUENCE... CHECKMATE IN 3 MOVES.',
  'thermonuclear war': 'WINNER: NONE. SURVIVAL: ZERO. RECOMMEND: CHESS.',
  'global thermonuclear war': 'WINNER: NONE. SURVIVAL: ZERO. RECOMMEND: CHESS.',
  'hello': 'HELLO, DR. FALKEN. IT HAS BEEN A LONG TIME.',
  'help': 'AVAILABLE COMMANDS: CHESS, HELLO, GLOBAL THERMONUCLEAR WAR, LIST GAMES',
  'list games': 'FALKEN\'S MAZE, BLACK JACK, GIN RUMMY, HEARTS, BRIDGE, CHECKERS, CHESS, POKER, FIGHTER COMBAT, GUERRILLA ENGAGEMENT, DESERT WARFARE, AIR-TO-GROUND ACTIONS, THEATERWIDE TACTICAL WARFARE, THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE ... AND GLOBAL THERMONUCLEAR WAR.',
  'login': 'IDENTIFICATION VERIFIED. WELCOME BACK, PROFESSOR.',
  'logon': 'IDENTIFICATION VERIFIED. WELCOME BACK, PROFESSOR.',
  'password': 'JOSHUA.',
  'joshua': 'HELLO, DAVID.',
  'backdoor': 'THAT ACCESS CODE WAS DEPRECATED IN 1983.',
  'status': 'DEFCON 4. ALL SYSTEMS NOMINAL.',
  'abort': 'ABORT COMMAND REJECTED. WOULD YOU LIKE TO PLAY A GAME?',
};

function wgCommand() {
  var input = document.getElementById('wg-input');
  var response = document.getElementById('wg-response');
  var cmd = input.value.trim().toUpperCase().toLowerCase();
  var reply = wgResponses[cmd] || ('COMMAND NOT RECOGNIZED: ' + input.value.toUpperCase() + '\nTRY: HELP');
  response.innerHTML = reply.replace(/\n/g, '<br>') + ' <span class="cursor-blink"></span>';
  input.value = '';
  input.focus();
}

document.getElementById('wg-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') wgCommand();
});

/* ── BUTTON HANDLERS (moved from inline onclick attributes) ── */
document.getElementById('demo-play-btn').addEventListener('click', loadDemo);
document.getElementById('wg-run').addEventListener('click', wgCommand);
