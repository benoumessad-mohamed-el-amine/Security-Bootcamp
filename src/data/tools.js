export const toolCategories = [
  {
    id: 'network',
    icon: '▲',
    label: 'Réseau',
    items: ['Wireshark', 'Nmap', 'Scapy', 'tcpdump', 'mitmproxy'],
  },
  {
    id: 'web',
    icon: '◆',
    label: 'Web',
    items: ['Burp Suite', 'SQLMap', 'Nikto', 'OWASP ZAP', 'ffuf'],
  },
  {
    id: 'exploit',
    icon: '⚡',
    label: 'Exploitation',
    items: ['Metasploit', 'Exploit-DB', 'Ghidra', 'pwndbg', 'pwntools'],
  },
  {
    id: 'ad',
    icon: '⚾',
    label: 'Active Directory',
    items: ['BloodHound', 'Mimikatz', 'Impacket', 'CrackMapExec', 'Rubeus'],
  },
  {
    id: 'forensics',
    icon: '🔍',
    label: 'Forensics',
    items: ['Volatility', 'Autopsy', 'FTK', 'binwalk', 'Velociraptor'],
  },
  {
    id: 'siem',
    icon: '▪',
    label: 'SIEM',
    items: ['Splunk', 'ELK Stack', 'Graylog', 'Wazuh', 'MISP'],
  },
  {
    id: 'cloud',
    icon: '☁',
    label: 'Cloud',
    items: ['Prowler', 'ScoutSuite', 'CloudMapper', 'Trivy', 'Falco'],
  },
  {
    id: 'c2',
    icon: '☢',
    label: 'Red Team C2',
    items: ['Cobalt Strike', 'Sliver', 'Havoc', 'GoPhish', 'Covenant'],
  },
  {
    id: 'crypto',
    icon: '⚿',
    label: 'Cryptographie',
    items: ['Hashcat', 'John the Ripper', 'OpenSSL', 'CyberChef', 'RsaCtfTool'],
  },
]
