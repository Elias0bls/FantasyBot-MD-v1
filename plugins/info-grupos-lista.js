const handler = async (m, { conn }) => {
  let txt = '';
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
} 
try {    
const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
const totalGroups = groups.length;
for (let i = 0; i < groups.length; i++) {
const [jid, chat] = groups[i];
const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
const participants = groupMetadata.participants || [];
const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
const isBotAdmin = bot?.admin || false;
const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
const participantStatus = isParticipant ? 'SI ✅' : 'NO ❌';
const totalParticipants = participants.length;
txt += `𝙽𝚄𝙼𝙴𝚁𝙾: *${i + 1}*
𝙶𝚁𝚄𝙿𝙾: \`${await conn.getName(jid)}\`
𝚂𝙸𝙶𝙾 𝙴𝚂𝚃𝙰𝙽𝙳𝙾 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾? ${participantStatus}
𝙸𝙳: ${jid}
𝚂𝙾𝚈 𝙰𝙳𝙼𝙸𝙽? ${isBotAdmin ? '✅' : '❌'}
𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂:  ${totalParticipants}
𝙴𝙽𝙻𝙰𝙲𝙴: ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || 'Error'}` : 'NO SOY ADMIN'}\n\n`;
}
m.reply(`${packname} ${lenguajeGB.smsLisA()}
${lenguajeGB.smsLisB()} ${totalGroups}\n\n${txt}`.trim());
} catch {
const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
const totalGroups = groups.length;
for (let i = 0; i < groups.length; i++) {
const [jid, chat] = groups[i];
const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
const participants = groupMetadata.participants || [];
const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
const isBotAdmin = bot?.admin || false;
const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
const participantStatus = isParticipant ? '✅ *SIGO AQUÍ | YES*' : '❌ *SIN ESTAR AQUÍ | NO*';
const totalParticipants = participants.length;    
    txt += `🐈 ${i + 1}
${lenguajeGB.smsLisC()} ${await conn.getName(jid)} ${participantStatus}
${lenguajeGB.smsLisD()} ${jid}
${lenguajeGB.smsLisF()} ${isBotAdmin ? '✅' : '❌'}
${lenguajeGB.smsLisE()} ${totalParticipants}
${lenguajeGB.smsLisG()} ${isBotAdmin ? 'Error' : 'NO SOY ADMINS'}\n\n`
}
m.reply(`${packname} ${lenguajeGB.smsLisA()}
${lenguajeGB.smsLisB()} ${totalGroups}\n\n${txt}`.trim());
}}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 5
handler.register = true
export default handler
