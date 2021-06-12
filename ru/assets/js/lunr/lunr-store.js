var store = [{
        "title": "Скачать T-Rex Miner 0.20.4 - NVIDIA GPU Miner [2021]",
        "excerpt":" Get started with T-Rex Miner  \t\t \t\t\t \t\tVersion: 0.20.4  \t\tFile: *t-rex.exe,    \t\tSHA256: d8be32b20259389ce8d5d7debd3922a20561f1f0cffa217eececb50edda40248  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     Готова для загрузки новая стабильная версия T-Rex Miner.   Вы можете скачать T-Rex Miner 0.20.4 отсюда:   Скачать сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкциями по установке.   Обязательно замените пул и адрес кошелька тем, что вы используете во всех файлах.        ","categories": ["download"],
        "tags": ["T-Rex Miner"],
        "url": "https://trexminer.info/download/0.20.4/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "T-Rex Miner&#58; Настройки, Команды, Параметры Командной Строки",
        "excerpt":"**    Скачать   Скачать Cейчас   Скачать (зеркало)   Basic parameters in command line   There are three things lolMiner needs in any case to know to start mining, namely     the algorithm to mine   the pool or solo node address to connect to   the user / wallet name to mine for   Usage   Full list of command line options:   -a, --algo\t\tSpecify the hash algorithm to use. \t\t\t\t   etchash \t\t\t\t   ethash \t\t\t\t   kawpow \t\t\t\t   mtp \t\t\t\t   mtp-tcr \t\t\t\t   multi \t\t\t\t   octopus \t\t\t\t   progpow \t\t\t\t   progpow-veil \t\t\t\t   progpow-veriblock \t\t\t\t   progpowz \t\t\t\t   tensority   --coin                     [Ethash, ProgPOW] Set coin name. Helps avoid DAG rebuilds when switching back from a dev fee session.  Example: “eth” for Ethereum, “zil” for Zilliqa.   --extra-dag-epoch          Allocate extra DAG at GPU for specified epoch. Can be useful for dual mining \t\t\t\t\t\t   of coins like Zilliqa (ZIL). (eg: --extra-dag-epoch 0) \t\t\t\t\t\t   Can be set for each GPU separately by using comma separated list of values \t\t\t\t\t\t   (set to -1 for the GPUs that should not allocate the extra DAG).   --nonce-start              [Ethash, ProgPOW] Starting nonce for the solution search.   --nonce-range-size         [Ethash, ProgPOW] Nonce range size for nonce search. The range will be split between all devices.   -d, --devices                  Comma separated list of CUDA devices to use. \t\t\t\t\t\t   Device IDs start counting from 0.   --pci-indexing             Sort devices by PCI bus ID. Device IDs start with 0.   --ab-indexing              Afterburner indexing (same as --pci-indexing but starts from 1).   -i, --intensity                GPU intensity 8-25 (default: auto). \t\t\t\t\t\t   Controls the GPU workload size, in other words how many nonces the miner is \t\t\t\t\t\t   processing “in one go”: N = 2 ^ intensity   --low-load                 Low load mode (default: 0). 1 - enabled, 0 - disabled. \t\t\t\t\t\t   Reduces the load on the GPUs if possible. Can be set to a comma separated string to enable \t\t\t\t\t\t   the mode for a subset of the GPU list (eg: --low-load 0,0,1,0)   --kernel                   [Ethash] Choose CUDA kernel (default: 0). Range from 0 to 5. \t\t\t\t\t\t   Set to 0 to enable auto-tuning: the miner will benchmark each kernel and select the fastest. \t\t\t\t\t\t   Can be set to a comma separated list to apply different values to different cards. \t\t\t\t\t\t   (eg: --kernel 2,1,1,3) \t\t\t\t\t\t   The support for this parameter may later be extended to cover other algorithms.   --gpu-init-mode            Enables DAG sequential initialization (default: 0). \t\t\t\t\t\t   0 - all GPUs are initialized in parallel \t\t\t\t\t\t   1 - fully sequential initialization, one GPU at a time \t\t\t\t\t\t   2 - two GPUs at a time \t\t\t\t\t\t   etc.   --dag-build-mode           [Ethash, ProgPOW, Octopus] Controls how DAG is built (default: 0). \t\t\t\t\t\t   0 - auto (miner will choose the most appropriate mode based on the GPU model) \t\t\t\t\t\t   1 - default (suitable for most graphics cards) \t\t\t\t\t\t   2 - recommended for 30xx cards to prevent invalid shares \t\t\t\t\t\t   Can be set to a comma separated list to apply different values to different cards. \t\t\t\t\t\t   (eg: --dag-build-mode 1,1,2,1)   --keep-gpu-busy            Continue mining even in case of connection loss.   -o, --url                      URL of the mining pool in the following format: ://: \t\t\t\t\t\t   Supported schemes: stratum+tcp \t\t\t\t\t\t\t\t\t\t\t  stratum+ssl \t\t\t\t\t\t\t\t\t\t\t  stratum+http \t\t\t\t\t\t\t\t\t\t\t  stratum2+tcp \t\t\t\t\t\t\t\t\t\t\t  stratum2+ssl \t\t\t\t\t\t   stratum2 is normally used by Nicehash, MiningPoolHub and other similar mining pools \t\t\t\t\t\t   Example: stratum+tcp://eu1.ethermine.org:4444 \t\t\t\t\t\t\t\t\tstratum+ssl://zcoin.mintpond.com:3005 \t\t\t\t\t\t\t\t\tstratum2+tcp://daggerhashimoto.hk.nicehash.com:3353   -u, --user                     Username for mining server.   -p, --pass                     Password for mining server.   -w, --worker                   Worker name.   -r, --retries                  Number of times to retry if a network call fails.   -R, --retry-pause              Pause in seconds between retries.   -T, --timeout                  Network timeout, in seconds (default: 300)   --time-limit               Miner shutdown interval in seconds. (default: 0 - disabled)   --temperature-color        Set temperature color for GPUs stat. Example: 55,65 - it means that \t\t\t\t\t\t   temperatures above 55 will have yellow color, above 65 - red color. (default: 67,77)   --temperature-limit        GPU shutdown temperature. (default: 0 - disabled)   --temperature-start        GPU temperature to enable card after disable. (default: 0 - disabled)   -b, --api-bind-telnet          IP:port for the miner API via telnet (default: 127.0.0.1:4068). Set to 0 to disable. \t\t\t\t\t\t   For external access set IP to 0.0.0.0, in which case setting “--api-read-only” is \t\t\t\t\t\t   recommended as well.   --api-bind-http            IP:port for the miner API via HTTP (default: 127.0.0.1:4067). Set to 0 to disable. \t\t\t\t\t\t   For external access set IP to 0.0.0.0, in which case setting “--api-read-only” is \t\t\t\t\t\t   recommended as well.   --api-read-only            Allow only read operations for API calls.   -J  --json-response            Telnet API server will make json responses.   -N, --hashrate-avr              Sliding window length in seconds used to compute average hashrate (default: 60).   --sharerate-avr            Sliding window length in seconds used to compute sharerate (default: 600).   --gpu-report-interval       GPU stats report frequency. Minimum is 5 sec. (default: 30 sec)   --gpu-report-interval-s     GPU stats report frequency in shares. 0 by default (disabled).   -q, --quiet                     Quiet mode. No GPU stats at all.   --hide-date                Don’t show date in console.   --send-stales              Don’t drop stale shares.   --validate-shares          Validate shares before sending to a pool. Also enables share diff info.   --no-color                Disable color output for console.   --no-hashrate-report       Disable hashrate report to pool.   --no-nvml                  Disable NVML GPU stats.   --no-strict-ssl            Disable certificate validation for SSL connections.   --no-watchdog              Disable built-in watchdog.   --watchdog-exit-mode       Specifies the action “A” the watchdog should take if the miner gets restarted “N” times \t\t\t\t\t\t   within “M” minutes. \t\t\t\t\t\t   Format: N:M:A. Valid values: \t\t\t\t\t\t\t\t\t\t  N: any positive integer, \t\t\t\t\t\t\t\t\t\t  M: any positive integer, \t\t\t\t\t\t\t\t\t\t  A: r(system reboot), s(system shutdown), e(miner exit) \t\t\t\t\t\t   Actions “r” and “s” require running the miner with administrative privileges. \t\t\t\t\t\t   Examples: \t\t\t\t\t\t   20:10:s - watchdog will shutdown the system if the miner gets restarted 20 times \t\t\t\t\t\t\t\t\t within any 10 minute interval \t\t\t\t\t\t   5:7:r   - watchdog will reboot the system if the miner gets restarted 5 times \t\t\t\t\t\t\t\t\t within any 7 minute interval   -B, --benchmark                Benchmark mode.   --benchmark-epoch          Epoch number used during benchmark (only for algorithms that generate DAG).   -P, --protocol-dump            User protocol logging.   -c, --config                   Load a JSON-format configuration file.   -l, --log-path                 Full path of the log file.   --cpu-priority             Set process priority (default: 2) 0 idle, 2 normal to 5 highest.   --autoupdate               Perform auto update whenever a newer version of the miner is available.   --back-to-main-pool-sec    Forces miner to switch back to main pool in case working with failover pool. \t\t\t\t\t\t   Parameter is set in seconds. (default: 600)   --exit-on-cuda-error       Forces miner to immediately exit on CUDA error.   --exit-on-connection-lost  Forces miner to immediately exit on connection lost.   --exit-on-high-power       Forces miner to immediately exit on high power consumption. \t\t\t\t\t\t   (eg: --exit-on-high-power 600 - exit in case of total power consumption exceeds 600W)   --reconnect-on-fail-shares Forces miner to immediately reconnect to pool on N successively failed shares (default: 10).   --fork-at                  Forces miner to change algorithm on predefined condition (works only with built-in watchdog enabled)   Epoch condition: &lt;algo_name&gt;=epoch:&lt;epoch_number&gt; (eg: --fork-at etchash=epoch:390).   Block condition: &lt;algo_name&gt;=block:&lt;block_number&gt; (eg: --fork-at x16rv2=block:6526421).   Time condition:  &lt;algo_name&gt;=time:&lt;YYYY-MM-DDTHH:MM:SS&gt;. Time must be set in UTC+0. (eg: --fork-at x16rv2=time:2019-10-01T16:00:00).   To change main pool port you must write it right after algo: &lt;algo_name&gt;:&lt;port_number&gt; (eg: --fork-at x16rv2:4081=time:2019-10-01T16:00:00).   --script-start             Executes user script right after miner start (eg: --script-start path_to_user_script)   --script-exit              Executes user script right before miner exit.   --script-epoch-change      Executes user script on epoch change.   --script-crash             Executes user script in case of miner crash.   --script-low-hash          Executes user script in case of low hash. Hash threshold is set in MegaHashes/second. \t\t\t\t\t\t   Example: --script-low-hash script_to_activate:50 \t\t\t\t\t\t\t\t\t(activates “script_to_activate” script once total hashrate drops to 50MH/s)   GPU fine tuning (Windows &amp; Linux)   --lock-cclock              Specifies desired locked GPU core clock speed in MHz. (default: 0 - disabled). Requires running the miner with administrative privileges. Example: --lock-cclock 1000  (applies clock 1000Mhz to all cards that support this functionality) \t--lock-cclock 1000,1300,0  (applies clock 1000Mhz to GPU #0, 1300MHz to GPU #1, ignore GPU #2)   --mt                       Memory tweak mode (default: 0 - disabled). Range from 0 to 6. General recommendation is to start with 1, and then increase only if the GPU is stable. The effect is similar to that of ETHlargementPill. Supported on Pascal GPUs with GDDR5 or GDDR5X memory only. Requires running the miner with administrative privileges. Can be set to a comma separated list to apply different values to different cards. Example: --mt 4  (applies tweak mode #4 to all cards that support this functionality) \t--mt 3,3,3,0  (applies tweak mode #3 to all cards except the last one)   GPU fine tuning (Windows only)   All options can be set to a comma separated list to apply different values to different cards. (default value for all options: 0 - not used)   --fan                       Sets GPU fan speed in percent or target temperature (auto-fan).   Valid formats:   --fan N   (where N is the fan speed)   --fan t:N (where N is the target temperature)   Example: --fan 45,t:67 GPU #0: set fan speed to 45% GPU #1: maintain GPU core temperature at 67C Note: fan speeds are limited to [5%, 95%] range in auto-fan mode.   --pl                        Sets GPU power limit in percent. Must be within [0, 100] range.   --cclock                    Sets GPU core clock offset in MHz. Requires running the miner with administrative privileges. Will be set to 0 on exit and during DAG rebuild.   --mclock                    Sets GPU memory clock offset in MHz. Requires running the miner with administrative privileges. Will be set to 0 on exit and during DAG rebuild.   --cv                        Sets GPU core voltage in percent. Must be within [0, 100] range. Use it only in case you know what you are doing! Requires running the miner with administrative privileges.   --lock-cv                   Specifies desired GPU core voltage in mV. (default: 0 - disabled). Requires running the miner with administrative privileges.   --pstate                    Sets GPU P-state. Valid values: p0. Requires running the miner with administrative privileges.   --version                   Display version information and exit.   -h, --help                      Display this help text and exit.   ","categories": ["documentation"],
        "tags": ["T-Rex Miner"],
        "url": "https://trexminer.info/documentation/arguments/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "T-Rex Miner&#58; История версий (changelog)",
        "excerpt":"**    Скачать   Скачать Cейчас   Скачать (зеркало)   Recent T-Rex Miner   T-Rex Miner 0.20.4           Add --lock-cclock parameter to lock GPU core clock speed            (Windows) Add --lock-cv parameter to lock GPU core voltage            (Windows) Add --pstate parameter to lock GPU performance/power state (currently p0 is the only supported value)            (Windows) Allow passing in values greater than 100% to --pl if the GPU supports it Reduce miner startup time      ","categories": ["documentation"],
        "tags": ["T-Rex Miner"],
        "url": "https://trexminer.info/documentation/changelog/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "T-Rex Miner&#58; Батники, Комиссия, системные требования",
        "excerpt":"You can use this list as a reference for all Launch Parameters supported by T-Rex Miner.    Скачать   Скачать Cейчас   Скачать (зеркало)   Sample Usages   ETH+ZIL-shardpool   t-rex -a ethash -o stratum+tcp://eu1-zil.shardpool.io:3333 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p zil1yn92lnkkfsn0s2hlvfdmz6y2yhpqm98vng38s9@eu1.ethermine.org:4444 -w rig0 --extra-dag-epoch 0   ETC-2miners   t-rex -a etchash -o stratum+tcp://etc.2miners.com:1010 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   ETC-woolypooly   t-rex -a etchash -o stratum+tcp://etc.woolypooly.com:35000 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   ETH-2miners   t-rex -a ethash -o stratum+tcp://eth.2miners.com:2020 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   ETH-ethproxy   t-rex -a ethash -o stratum+http://127.0.0.1:8080   ETH-nanopool   t-rex -a ethash -o stratum+tcp://eth-eu1.nanopool.org:9999 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd.rig0/some@email.org -p x   ETH-ethermine   t-rex -a ethash -o stratum+tcp://eu1.ethermine.org:4444 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   ETH-miningpoolhub   t-rex -a ethash -o stratum2+tcp://europe.ethash-hub.miningpoolhub.com:20535 -u somaton.gtx1080 -p x   ETH-miningrigrentals   t-rex -a ethash -o stratum+tcp://eu-ru01.miningrigrentals.com:3344 -u wasya89.165854 -p x   ETH-woolypooly   t-rex -a ethash -o stratum+tcp://eth.woolypooly.com:3096 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   ETH-flexpool   t-rex -a ethash -o stratum+ssl://eth-us-east.flexpool.io:5555 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd -p x -w rig0   CFX-woolypooly   t-rex -a octopus -o stratum+tcp://cfx.woolypooly.com:3094 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd.rig0 -p x   CFX-nanopool   t-rex -a octopus -o stratum+tcp://cfx-eu1.nanopool.org:17777 -u 0x1f75eccd8fbddf057495b96669ac15f8e296c2cd.rig0/some@email.org -p x   RVN-2miners   t-rex -a kawpow -o stratum+tcp://rvn.2miners.com:6060 -u RBX1G6nYDMHVtyaZiQWySMZw1Bb2DEDpT8.rig -p x   RVN-ravenminer   t-rex -a kawpow -o stratum+tcp://stratum.ravenminer.com:3838 -u RBX1G6nYDMHVtyaZiQWySMZw1Bb2DEDpT8.rig -p x   RVN-woolypooly   t-rex -a kawpow -o stratum+tcp://rvn.woolypooly.com:55555 -u RBX1G6nYDMHVtyaZiQWySMZw1Bb2DEDpT8.rig -p x   SERO-woolypooly   t-rex -a progpow --coin sero -o stratum+tcp://sero.woolypooly.com:8008 -u JCbZnEb8XtWV814QWRpDcDxpQpXZXw4ARneAtwXNYdd3reuo4xQDcuZivopA761QnQyfMermHR9Mpi156F5n7ez9tv75Wt7vWbHXtuyZsQVWLbKNHnZgwcXbR2yZmbw89WT -p x -w rig0   VEIL-woolypooly  t-rex -a progpow-veil -o stratum+tcp://veil.woolypooly.com:3098 -u bv1qzftz0vuqa82zy29avylv8sclskweqsrwysgrkg -p x -w rig0   XZC-2miners   t-rex -a mtp -o stratum+tcp://xzc.2miners.com:8080 -u aBR3GY8eBKvEwjrVgNgSWZsteJPpFDqm6U.rig0 -p x   XZC-mintpond   t-rex -a mtp -o stratum+ssl://zcoin.mintpond.com:3005 -u aBR3GY8eBKvEwjrVgNgSWZsteJPpFDqm6U.rig0 -p x   XZC-woolypooly   t-rex -a mtp -o stratum+tcp://zcoin.woolypooly.com:3080 -u aBR3GY8eBKvEwjrVgNgSWZsteJPpFDqm6U.rig0 -p x   ","categories": ["documentation"],
        "tags": ["T-Rex Miner"],
        "url": "https://trexminer.info/documentation/setup/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Прогноз Курса Ethereum на Июнь 2021&#58; HOLD",
        "excerpt":"   Компания MicroStrategy объявила,  что планирует привлечь $400 млн для последующей покупки биткоинов. Она разместит облигационный заем с погашением в 2028 году. В пресс-релизе компании указывается, что MicroStrategy передаст всю свою криптовалюту новой недавно созданной дочерней компании.   То есть горизонт планирования для сверхуспешных инвестиций в биткоин должен быть более 4-х лет. Лучше 6 лет.   В 2014 году два студента компьютерных наук Дэн Элитцер и Джереми Рубин распределили по $100 в BTC  среди тысяч студентов MIT. После того как Рубин и Элит покинули Массачусетский технологический институт, они продолжили работать в криптовалютной отрасли. Несколько студентов, которые держали свои BTC более шести лет, рассказали, что эти дармовые биткоины принесли им 13000% прибыли.   Очень многие выпускники связали свою работу с блокчейном и криптовалютами. Но сохранить нетронутыми свои биткоины, согласно опросу, смогли только 16% бывших студентов.   Одна студентка, Мэри Спанджерс, рассказала Bloomberg, что у нее все еще есть те самые подаренные BTC и она хранит их в укромном месте. Спанджерс сказал, что стоимость её BTC, составлявшая на момент раздачи 100 долларов, теперь стоит около 20 000 долларов, что принесло ей около 13 000% прибыли. Поначалу, по словам Спанджерс, многие студенты думали, что это просто шутка. Но “это действительно замечательно”.   Другой выпускник MIT инженер-робототехник из Pendar Technologies Селам Гано сказал, что продал свой BTC за 300 долларов, когда он вырос в цене в 3 раза.      “Это были дармовые деньги, я ни о чем не жалею”.    Однако если бы все студенты Массачусетского технологического института сохранили бы подаренные биткоины нетронутыми, то в общей сложности они заработали бы около 60 миллионов долларов.   В реальной жизни людей, способных держать в неприкосновенности свои биткоины более 6 лет, ещё больше. Более 30% биткоинов не покидали своих кошельков более 6 лет. За эти 6 лет биткоин хоронили более 300 раз, и он всё равно жив. У каждого есть выбор, как у детей в известном зефирном эксперименте. Съесть свою зефирку прямо сейчас или подождать и получить больше зефира.  ","categories": ["articles"],
        "tags": [],
        "url": "https://trexminer.info/ru/articles/eth-06-08/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Canaan&#58; Майнинг на Асиках в Казахстане [2021]",
        "excerpt":"   В понедельник производитель ASICов Canaan Inc. объявил о создании зарубежного центра послепродажного обслуживания в Казахстане. По словам представителя компании Canaan, сервисный центр будет предоставлять местным клиентам послепродажное обслуживание, такое как тестирование машин, гарантийное обслуживание, техническое обслуживание и технические консультации.   С тех пор как Китай начал закрывать биткоин-майнеров в регионе, Казахстан стал мишенью для переселения крупных китайских ферм.   Согласно отчету Wired  со ссылкой на анонимный источник, “знакомый с китайской майнинговой отраслью”, китайские майнеры, которые “запаниковали” от давления на них в КНР, срочно переезжают в Казахстан.”   Буквально несколько лет назад казахстанские чиновники, казалось, никогда не позволят процветать майнингу в стране. В 2018 году сообщалось, что Казахстан, возможно, запретит майнинг биткоинов и другие виды криптоуслуг. Через несколько лет власти страны и финансовые регуляторы поменяли свое мнение и стали гораздо более открытыми для принятия криптовалют и майнинга. Недавно центральный банк Казахстана объявил о планах запустить пилотный проект собственной цифровой валюты центрального банка (CBDC) с несколькими частными компаниями.   Сейчас представители китайских майнеров носятся по стране в поисках участков для установки майнинговых ферм. Цена электричества в Казахстане для юридических лиц сейчас составляет около 16 тенге, что эквивалентно 2,74 рубля. И это ровно в два раза ниже, чем в соседней России.   Если бы российские власти умели считать деньги, то несомненно пустили бы китайских майнеров в Россию. В России сейчас есть запас установлпенных мощностей электрогенерации в 30% от текущего объема потребления. Избыточные мощности расположены в основном на ГЭС на полноводных сибирских реках, и рядом с атомными электростанциями. Знакомые с вопросом люди подсказывают, что цена электричества прямо на территории ГЭС и АЭС составляет примерно 1,3 рубля, что ниже, чем в Казахстане.   Майнинг на удаленных объектах электрогенерации позволит утилизировать излишки электроэнергии, экономя на строительстве линий электропередач. Это приведет к увеличению дополнительной валютной выручки генерирующих компаний.   Кроме того, на нефтепромыслах Тюменской области существуют огромные резервы попутного нефтяного газа, который бесцельно сжигается триллионами кубометров, инвестиции в газогенераторы прямо на месторождениях окупятся меньше чем за год, в случае организации там майнинга.   Покажите этот текст вице-премьеру Андрею Белоусову, он единственный, кто в курсе проблемы. Пусть направит изъятые у металлургов сверхдоходы от экспорта и повышения цен на внутреннем рынке на организацию майнинга на нефтяных месторождениях.   Я гарантирую, что Фонд Национального Благосостояния можно будет утроить за четыре года, если направить часть инвестиций из него на борьбу с бесцельным сжиганием попутного газа, путем утлизации его майнинговыми фермами.  ","categories": ["articles"],
        "tags": [],
        "url": "https://trexminer.info/ru/articles/canaan-06-09/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Биткоин в Сальвадоре Стал Национальным Платежным Средством",
        "excerpt":" Наиб Букеле - послушный молодой менеджер, продвигающий революционные технологии по совету старших товарищей.   Президент Сальвадора Наиб Букеле, кажется слетел с катушек. Мало того, что парламент абсолютным большинством голосов утвердил биткоин, как официальное платежное средство в стране, он еще собирается сделать майнинг биткоина чуть ли не главной отраслью экономики.   Но так ли это? Давайте разберемся.   Для справки, Сальвадор это самая маленькая по площади и самая плотнонаселённая страна в Центральной Америке, а также единственное государство в этом регионе, не имеющее выхода к Карибскому морю. Общая площадь Сальвадора в два раза меньше Московской области.   Сальвадор славится своими пляжами на побережье Тихого океана, местами для серфинга и горными массивами. Дорога цветов – знаменитый туристический маршрут – проходит через кофейные плантации, тропические леса с водопадами и горные города, среди которых Уайуа, где проводится Гастрономический фестиваль, и Атако, известный своими яркими фресками на стенах домов.   Главным источником доходов Сальвадора являются поступления от гастарбайтеров, работающих за границей, а также от экспорта сахара и этилового спирта. Остальное - туризм. Большая часть населения получает минимальную зарплату в $224. Особой популярностью страна пользуется у наркотуристов, дети цветов любят Дорогу цветов. Сальвадор, это страна, где можно купить полкило чистого кокаина за $500, который поставляется тайными тропами джунглей из соседней Колумбии.   С финансовой точки зрения Сальвадор находится на самом дне. Он живет на кредитах МВФ и у него даже нет собственной национальной валюты. В качестве официальных денег в стране используют доллары США. Создать такую валютную систему без согласия США просто невозможно. Другими словами, Сальвадор - это негласный протекторат США.   Тем более странно читать в сми предположения, что храбрый президент Букеле под носом у США совершает финансовую революцию. Вводит в официальное хождение по стране биткоин и собирается построить множество майнинговых ферм на знаменитых сальвадорских вулканах с их горячими гейзерами и 100% экологически чистой и возобновляемой энергетикой.   Некоторые журналисты даже договорились до того, что предстоящая встреча управляющих МВФ с президентом Букеле может послужить для него отрезвляющим пинком, который приведет к отмене уже принятого закона, поскольку на кону стоит очередной транш МВФ в $1 млрд.   На самом деле не смотря на яростную критику нового закона самим МВФ, Мировой банк прокомментировал это событие как-то подозрительно вяло: в том ключе, что мол если хотят, пусть пробуют, хотя это очень опасно, мол биткоин слишком волатилен.   Тем не менее, важность этого события нельзя недооценивать. В Латинской Америке есть еще десяток похожих на Сальвадор государств, национальные валюты которых переживают двузначную инфляцию и которые с интересом смотрят на опыт Сальвадора. Если все пройдет успешно, люди примут биткоин и созданный на геотермальных станциях майнинг станет новой большой отраслью страны, многие последуют этому заразительному примеру.   Если в ближайшие недели закон не будет отменен, а самого президента Букеле не постигнет судьба его коллеги из Танзании, который научился говорить правду о ковиде и умер от сердечного приступа, то вся эта комедия была изначально задумана банкирами в качестве эксперимента. А Наиб Букеле - послушный молодой менеджер, продвигающий революционные технологии по совету старших товарищей.  ","categories": ["articles"],
        "tags": [],
        "url": "https://trexminer.info/ru/articles/naib-06-12/",
        "teaser": "https://trexminer.info/assets/images/thumbs/500x300.png"
      },]
