'use client'

export default function Home() {
  
  // TODO: Convert this JavaScript to React hooks and event handlers
  
// Original script:

        const sock = document.getElementById('sock');
        const smellMeter = document.getElementById('smellMeter');
        const smellStatus = document.getElementById('smellStatus');
        const stinkLines = document.querySelector('.stink-lines');
        let smellLevel = 0;

        sock.addEventListener('click', () => {
            sock.classList.add('shake-animation');
            setTimeout(() => sock.classList.remove('shake-animation'), 500);
            
            smellLevel = Math.min(100, smellLevel + 20);
            updateSmellMeter();
        });

        function updateSmellMeter() {
            smellMeter.style.width = `${smellLevel}%`;
            stinkLines.style.opacity = smellLevel / 100;
            
            if (smellLevel < 30) {
                smellStatus.textContent = "Fresh and clean! 🌸";
                smellMeter.classList.remove('bg-red-600', 'bg-yellow-500');
                smellMeter.classList.add('bg-purple-600');
            } else if (smellLevel < 70) {
                smellStatus.textContent = "Getting a bit funky... 😕";
                smellMeter.classList.remove('bg-purple-600', 'bg-red-600');
                smellMeter.classList.add('bg-yellow-500');
            } else {
                smellStatus.textContent = "WHEW! Time for a wash! 🤢";
                smellMeter.classList.remove('bg-purple-600', 'bg-yellow-500');
                smellMeter.classList.add('bg-red-600');
            }
        }

        function washSock() {
            sock.classList.add('rotate-180');
            setTimeout(() => sock.classList.remove('rotate-180'), 500);
            
            smellLevel = 0;
            updateSmellMeter();
        }
    

  
  
  return (
    <>
      
      <style jsx>{`

        @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
        }
        .shake-animation {
            animation: shake 0.5s ease-in-out;
        }
        .stink-lines {
            position: absolute;
            opacity: 0;
            transition: opacity 0.3s;
        }
    

      `}</style>
      
      
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Smelly Socks Detector</h1>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="relative" id="sockContainer">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzZCNDZDMSIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTggMTJjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem04IDBjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0tNCA4Yy0zLjMxIDAtNi0yLjY5LTYtNmgxMmMwIDMuMzEtMi42OSA2LTYgNnoiLz48L3N2Zz4=" 
                     alt="Sock" 
                     className="w-32 h-32 mx-auto cursor-pointer transform transition-transform hover:scale-110"
                     id="sock" />
                
                <div className="stink-lines text-green-500 text-2xl absolute" style={{top: '-20px', left: '50%'}}>
                    ~~~
                </div>
            </div>
            
            <div className="mt-8">
                <div className="bg-gray-200 rounded-full h-4">
                    <div className="bg-purple-600 rounded-full h-4 transition-all duration-500" id="smellMeter" style={{width: '0%'}}></div>
                </div>
                <p className="text-center mt-4 text-gray-600" id="smellStatus">Click the sock to check its smell!</p>
            </div>
            
            <button className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    onClick="washSock()">
                Wash Sock
            </button>
        </div>
        
        <div className="mt-8 text-center text-gray-500">
            <p>Smell-o-meter™ - The Ultimate Sock Freshness Detector</p>
        </div>
    </div>

    <script>
        const sock = document.getElementById('sock');
        const smellMeter = document.getElementById('smellMeter');
        const smellStatus = document.getElementById('smellStatus');
        const stinkLines = document.querySelector('.stink-lines');
        let smellLevel = 0;

        sock.addEventListener('click', () => {
            sock.classList.add('shake-animation');
            setTimeout(() => sock.classList.remove('shake-animation'), 500);
            
            smellLevel = Math.min(100, smellLevel + 20);
            updateSmellMeter();
        });

        function updateSmellMeter() {
            smellMeter.style.width = `${smellLevel}%`;
            stinkLines.style.opacity = smellLevel / 100;
            
            if (smellLevel < 30) {
                smellStatus.textContent = "Fresh and clean! 🌸";
                smellMeter.classList.remove('bg-red-600', 'bg-yellow-500');
                smellMeter.classList.add('bg-purple-600');
            } else if (smellLevel < 70) {
                smellStatus.textContent = "Getting a bit funky... 😕";
                smellMeter.classList.remove('bg-purple-600', 'bg-red-600');
                smellMeter.classList.add('bg-yellow-500');
            } else {
                smellStatus.textContent = "WHEW! Time for a wash! 🤢";
                smellMeter.classList.remove('bg-purple-600', 'bg-yellow-500');
                smellMeter.classList.add('bg-red-600');
            }
        }

        function washSock() {
            sock.classList.add('rotate-180');
            setTimeout(() => sock.classList.remove('rotate-180'), 500);
            
            smellLevel = 0;
            updateSmellMeter();
        }
    </script>

    </>
  )
}