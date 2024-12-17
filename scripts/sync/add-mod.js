import { saveModDetails } from "./_common/_exports.js";

/**
 * @import { Page } from "@astral/astral";
 */

/**
 *
 * @param {object} options - The root object
 * @param {string} options.description - The root object
 * @param {string} options.gamePlatformDomainName - The root object
 * @param {number} options.gamePlatformId - The root object
 * @param {string} options.name - The root object
 * @param {Page} options.nexusModsSessionPage - The root object
 * @param {number} options.overriddenModPlatformId - The root object
 * @param {number} options.overridingModPlatformId - The root object
 * @param options.version - The root object
 * @example
 */
const addMod = async ({
	description,
	gamePlatformDomainName,
	gamePlatformId,
	name,
	nexusModsSessionPage,
	overriddenModPlatformId,
	overridingModPlatformId,
	version
}) => {
	const addModUrl = `https://www.nexusmods.com/${gamePlatformDomainName}/mods/add`;

	await nexusModsSessionPage.goto(addModUrl);

	return await saveModDetails({
		description,
		gamePlatformDomainName,
		gamePlatformId,
		name,
		nexusModsSessionPage,
		overriddenModPlatformId,
		overridingModPlatformId,
		version
	});
};

export default addMod;

// MARK: Mod details - Save

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?Save", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/add",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "game_id=4187&new_game_name=&type=1&category_id=2&suggested_category_id=21&suggested_new_category=&name=Catch+-+6331-TNV+-+12101-FDK&language_id=5&version=0.1.0&author=Catch+Group&summary=Brief+overview&description=Detailed+description&tag_gore=0&tag_nudity=0&tag_skimpy=0&tag_sexualised=0&tag_profanity=0&classtags=4573",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Mod details - Update

// id: 12701
// game_id: 4187
// new_game_name:
// type: 1
// category_id: 2
// suggested_category_id: NaN
// suggested_new_category:
// name: Catch - 6331-TNV - 12101-FDK
// language_id: 5
// version: 0.1.1
// author: Catch Group
// summary: Brief overview
// description: Detailed description
// tag_gore: 0
// tag_nudity: 0
// tag_skimpy: 0
// tag_sexualised: 0
// tag_profanity: 0
// classtags: 4573

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?Save", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?id=12701&game_id=4187&step=details",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "id=12701&game_id=4187&new_game_name=&type=1&category_id=2&suggested_category_id=NaN&suggested_new_category=&name=Catch+-+6331-TNV+-+12101-FDK&language_id=5&version=0.1.1&author=Catch+Group&summary=Brief+overview&description=Detailed+description&tag_gore=0&tag_nudity=0&tag_skimpy=0&tag_sexualised=0&tag_profanity=0&classtags=4573",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Media

// MARK: Media - Mod page header area

// image: (binary)
// game_id: 4187
// mod_id: 12701

// fetch("https://www.nexusmods.com/Uploads?CroppedModHeaderImage", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryzK0dgGQItxw7AG27",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=media&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryzK0dgGQItxw7AG27\r\nContent-Disposition: form-data; name=\"image\"; filename=\"blob\"\r\nContent-Type: image/jpeg\r\n\r\nÿØÿà\u0000\u0010JFIF\u0000\u0001\u0001\u0000\u0000\u0001\u0000\u0001\u0000\u0000ÿâ\u0001ØICC_PROFILE\u0000\u0001\u0001\u0000\u0000\u0001È\u0000\u0000\u0000\u0000\u00040\u0000\u0000mntrRGB XYZ \u0007à\u0000\u0001\u0000\u0001\u0000\u0000\u0000\u0000\u0000\u0000acsp\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\tdesc\u0000\u0000\u0000ð\u0000\u0000\u0000$rXYZ\u0000\u0000\u0001\u0014\u0000\u0000\u0000\u0014gXYZ\u0000\u0000\u0001(\u0000\u0000\u0000\u0014bXYZ\u0000\u0000\u0001<\u0000\u0000\u0000\u0014wtpt\u0000\u0000\u0001P\u0000\u0000\u0000\u0014rTRC\u0000\u0000\u0001d\u0000\u0000\u0000(gTRC\u0000\u0000\u0001d\u0000\u0000\u0000(bTRC\u0000\u0000\u0001d\u0000\u0000\u0000(cprt\u0000\u0000\u0001\u0000\u0000\u0000<mluc\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\fenUS\u0000\u0000\u0000\b\u0000\u0000\u0000\u001c\u0000s\u0000R\u0000G\u0000BXYZ \u0000\u0000\u0000\u0000\u0000\u0000o¢\u0000\u00008õ\u0000\u0000\u0003XYZ \u0000\u0000\u0000\u0000\u0000\u0000b\u0000\u0000·\u0000\u0000\u0018ÚXYZ \u0000\u0000\u0000\u0000\u0000\u0000$ \u0000\u0000\u000f\u0000\u0000¶ÏXYZ \u0000\u0000\u0000\u0000\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-para\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0002ff\u0000\u0000ò§\u0000\u0000\rY\u0000\u0000\u0013Ð\u0000\u0000\n[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000mluc\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\fenUS\u0000\u0000\u0000 \u0000\u0000\u0000\u001c\u0000G\u0000o\u0000o\u0000g\u0000l\u0000e\u0000 \u0000I\u0000n\u0000c\u0000.\u0000 \u00002\u00000\u00001\u00006ÿÛ\u0000C\u0000\n\u0007\u0007\b\u0007\u0006\n\b\b\b\u000b\n\n\u000b\u000e\u0018\u0010\u000e\r\r\u000e\u001d\u0015\u0016\u0011\u0018#\u001f%$\"\u001f\"!&+7/&)4)!\"0A149;>>>%.DIC<H7=>;ÿÛ\u0000C\u0001\n\u000b\u000b\u000e\r\u000e\u001c\u0010\u0010\u001c;(\"(;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ÿÀ\u0000\u0011\b\u0001\u001d\u0003è\u0003\u0001\"\u0000\u0002\u0011\u0001\u0003\u0011\u0001ÿÄ\u0000\u001b\u0000\u0001\u0000\u0003\u0001\u0001\u0001\u0001\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0006\u0007\u0004\u0003\u0002\u0001ÿÄ\u0000J\u0010\u0001\u0000\u0001\u0003\u0002\u0001\u0005\r\u0005\u0004\b\u0005\u0004\u0003\u0000\u0000\u0000\u0001\u0002\u0003\u0004\u0005\u0011\u0006\u0012!AU\u0007\u0013\u001616Qaq¡±Ñ\u0017\"stÁ\u0014#BR23br²ÂÒ$C¢£\u00155SñcâðÿÄ\u0000\u001b\u0001\u0001\u0000\u0002\u0003\u0001\u0001\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0004\u0001\u0005\u0006\u0002\u0007ÿÄ\u00009\u0011\u0001\u0000\u0001\u0002\u0002\u0005\t\u0006\u0006\u0003\u0000\u0003\u0000\u0000\u0000\u0000\u0000\u0001\u0002\u0003\u0004\u0011\u0005\u0012!1Q\u0013\u00142ARq¡Ñ\u0006a±Áá\u0015\u0016\"34BSðñ#CrÿÚ\u0000\f\u0003\u0001\u0000\u0002\u0011\u0003\u0011\u0000?\u0000\u0001³}X\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004¥S­jöðj½6b¸ªyqNûm\u001bøÊ3w.Sn®­Ñµ\u001c/ÿ\u0000fvzÒ¿s\u001fSìÎÏZWîcê£YøÖ\u0007·å>\u0000¿ýÙëJýÌ}O³;=i_¹©ËQÄük\u0003ÛòE\u0000_þÌìõ¥~æ>§Ù´¯ÜÇÔå¨â~5íùO¢:µ<8Óõ<8®k\u0017&TÆÛí.T±µµ¦¨ªª7H\u0000ô\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000¿ýÙëJýÌ}O³;=i_¹ª.Z-GãX\u001eßú(\u0002ÿ\u0000ögg­+÷1õ>Ììõ¥~æ>§-G\u0013ñ¬\u000foÊ}\u0014\u0001û3³ÖûúfvzÒ¿s\u001fS£øÖ\u0007·å>\u0000â}\u0002\u001eÍµFDßù|©§·<ÇÐI\u0013\u0013\u0019Ãejí\u0017¨Nq \f¥\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001)ÃZÖ|Dãé÷¦ñU\\r\"}µlÄÌFôw.Ñn3®b#Þ\u0016Ü~ç:µÈÞöF5ór¦©øFß\u0017u¾æSÍ75hõScõå<MÚ#­B½-£}Ïü¡D\u0017ÿ\u0000³;=i_¹«Îçs)çz´O*±úòå¨âñ\u001ag\u0003?ßÊ}\u0014AmÈîs«[9\u0018·£ÍÊgå·Å\u000fÂúÞ\fLÞÓ¯M1üVã\u001föî÷\u0015Ó;¥jÞ;\u000bwe\u0017#Å\u0014\u0013\u0013\u0013´ÆÓ\u0003Òà\u0000\u0000\u0000\u0000\u0003×\u0013\u0016þvU¼lj9wnÏ&wÞ}rð#ú»ÿ\u00005¿÷15Do\u00171\u0016mNW+|Ä D÷\u001cGÕßù­ÿ\u0000¸ð#ú»ÿ\u00005¿÷1¯O\u0014|÷\u000bþJ|cÕ\u0002'¼\bâ>®ÿ\u0000ÍoýÇ\u001cGÕßù­ÿ\u0000¸×§Ïp¿ä§Æ=P\"OQá½_IÆìNõjjy]ò¹çÕ3æF3\u0013\u0013¹=»\\j&&=Û@\u0019H\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000,<\tå^?÷+ÿ\u0000,«ÉÞ\t«Å¸\\ûDòã×÷*y¯£*xèÏ\u000bsÿ\u0000ù5°\u001açÍ@\u0000\u0000\u0018÷\u0015ÑÞø£>6ÞîüÞýQ\u000b\u001f\u001eØ<Sz½¶Öè®;9?éW\u001b\u001a':aô¼\u0015ZØksî\u0003ÒØ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000õÅ¦kË³Dxê¹LFþ·G¬NO\u0010àZßþ\"TNóð'd#»V¥ºª¨Î\u0003Zùh\u0000\u0000\u00037îÿ\u0000¼âþ_ýR§­½Ò*ß_±NüÑO7yU*Köº\u0010ú.°vû\u00126 \u0000\u0000\u0000\u0000\u0000\u0000$tM\u000b3]Ëï8´mE?Ö]«ú4G§Óèbf\"3w.Qn®¹Ê!ÁjÕË÷iµjÝW.W;SM1¼Ìú!pÑ»edÅ7µK¿³[~õFÓ\\úçÅ\u001f\u0015ÃCáÌ\r\nÌF=¾]ù«¿\\}ê¾èK*×~ge.K\u001b§«ªf>Èã×öFé¼?¥i1\u0013nãþeQÊ¯¶R@fg{®åw*Ö®sx\u0003\u000f\u0000\u0000\u0000\býGBÓ5ZgöÌ;w*ãÚ¸ÿ\u0000\u0014s©ºÇs»Ö¢«ºMîýLs÷³\u0011W²|SíÙ¡\u000ftÜªËøm!ÃOè«g\tÛ\u001fïs\n¿bö5ê¬ßµ]«NÕQ\\m0ølºÖ®ã÷¼«{\\¦>åêyª£ÛÓ\u001e[®è\u0019\u000eWzÈ§j©ýÝêcî×\u001f¤ú\u0016è»\u0015÷»\f\u0006µý3²®\u001eÀ\u0012¶à\u0000á_)ôÿ\u0000Åbc¼+å>ø±òlJúPã=¡ýú;¾²\u0000®ç\u0000\u0001UîäÝ?§åS1iÝÑ<§ó\u0014üªf+¶:\u000eë@ÿ\u0000\u000fã \tÀ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001/Â;ß\u0014`U¿ï'¶&?TC³G»Þ5¬\u001b»ÿ\u0000C\"ÜÏýPÅ[bPb)Ö³]<b~M°\u0006µó\u0000\u0000\u0000\u0005\u000fºV\u0014ÿ\u0000ÁgÓ\u001cÜök?êPÛ7\u0010iq¬hÙ\u0018|Ñ]Tò­ÌôU\u001cñôö±ªèªÝÊ­×LÓ]31U3\u001bLLt.Ù«:rw\u001a\u000b\u0011\u00170Üï§å;&o\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005§¹î\u0014äq\u0004äÍ?w\u001aÔÕ¿ö§>\u0013=³Uà\"t½\u000eiäßÊù_)þ\u0018ìçö¢»VTµ\u001ac\u0011\u0016pG][=|0\u0014\\\u0000\u0000\u0000\u0003-îsÄõSÍ÷,ÑOÎUe7Æw{÷\u0015çNüÔÕM1ì¦!\bØÑÑÒ°\u0014êámÇº>@\u000fK\u0000\u0000\u0000\u0000\u0003×\u0017\u001aöfU¼k\u0014MwnÕ\u0014ÓLtÈÄÌDg.í\u0003BÈ×µ\bÇ³÷mSÏvìø¨§ëæ·§iØº^\u001d\u0018¸¢Ýº;j<ÏL¹ô-\u001aÆ¦[Äµ\u00115øîÜé®®ú$n\\ÖsÒzF¬]ÍZz\u0011»ßï\u0000DÔ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000åÔ4ümS\u000e¼L»q]ªãÛ\u0013ç4ºsÕ5M3\u0015S9L1{DÈÐµ\u001a±o}ê'ïZ¹·5tý|ðl<K¡Û×tªìm\u0011~½b¹è«Íê\u0017ÿ\u0000L~åºí\\ªÝÊfè¦ªgÇ\u0013\u000bÖë×¢ñüî×êéFÿ\u0000Wà\t[T·\nùO§þ,|\u0013\u001dá_)ôÿ\u0000ÅbT¿Ò\u0019í\u000fïÑÝõ\u0005w8\u0000\n¯tO&éüÅ?*NîäÝ?§åS1]±ÐwZ\u0007ø\u0019\u0000LÞ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u00055M5EQ;LNð\u0003\rÓ\u001eôdcZ½Oå\u0011T{cw¢\u001fò¿ká\u001a÷ç¢ß{ðÏ'ôL5³\u0019NOÞ·ÉÝª\u00130\u0000Â \u0000\u0014~5á:ò+¯UÓíÍW6Þýªc¯íG§Ï\u000bÀõMSLç\u000bXLUÌ-Ø¹Gý`ãU×8+NÕêªý¯øLçè»Túiýce+Pào\u0006fiÆ«qüv'ÿ\u0000oà»MÚjvø]-ÄGKVxOª¾=/cßÆ¯~ÍËU-tÍ3ñy¤m\"bc8\u0000\u0019\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001õnÝËµò-ÑUuOE1¼gäM`ð~¹1ÉÂªÍ\u0013üwþäG²yþ\u000bÀ\u001885SP®3.Ç<Q¶ÖãÙÓíìGUÚikq:S\u000bµg<#j\u000b¸N¼ûÔj9öæJ'{tU\u001fÖÏû~m)ù\u0011\u0011\u0011\u0011\u001bDx¡ú§]s\\ç.'\u001b¹¹¯^î¨à\u0000ð¤\u0000\u00009µ\u001c¯Ø´Ü­öï6ª®=q\u001bTÓ5LS\u001dlsX¿ûNµ~'x¹~º£ÕÊgw³¨ÑLQLS\u001d@\u0003Ø\u0000\u0000\u0000\u0000\u000b÷s½\u0012)¢½bõ<õonÆñââ«ôíQ±1®feÚÆµ\u001bÜ½\\QO®gfÙk\u0003\nÎ%ÚÝ\"ôíÒýYFN{Nâ¦ÕµNú¾_w¸\nn(\u0000\u0000Cñ\u0017\u0011ãpþ$W\\EÌÕYñúgÍ\fÄLÎPÕªïW\u0014Q\u0019Ì¥/äYÅµ7².ÑjÝ>:ëª)öÊ½ÇÚ\u001e-SMºïdÌñQÍÛ;3SXÎÖ2&ömù®æ¦T8©±\u001fÙÖa½·\u0011ú³\u0011»ýðhÝ+\u000byÛO¿1éªN7tM\u001eôÅ7­äØôÕDU\u001f\tßàÌ®FÊ´\u001e\u000ec(nÁÔ°µ+]÷\u000b&Ýúzy\u0015sÇ®<qíu0ÜLÌ\fr1oWfí>*©¿ûj\u001c)Å4kÖ&Íø¦Þm¨ÞºcÅ\\4~°å©§l9ý!¡ëÂÓÊQ:ÔùÂÄ\u0002\u0016\u0000\u0006iÝ\u0007I=VûTík.>öÝ\u0015Ç¶6Öã->5\u000e\u001aÉë±\u001dúðøþ\u001b¤µV­MÄÎ\u001f\u0015LõNÉø²@\u0017ßDKp¯úâÇÉ±1Þ\u0015òOüXù6%Ký(qÐþý\u001dßY\u0000Ws\u0000ª÷DònÌSò©´îèMÓù~U3\u0015Û\u001d\u0007u ñ\u0004Íà\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u00004NæÙ½óOÊÂªyí\\úª¾qñ]\u00197\u0004ê?ú\u0012YªÚÞLw½sâøÄvµ+ÔåSÓv9,\\ÕÕVßP\u0004-0\u0000\u0000\u0000\u0000>k¢Í5Ó\u0015S=\u0013\u001bÃæ¥^Þni¸ÌôÍwù;s{¦º©èÎHº¸gC®6/\u001bÙDGÉñà®Õ;%.3­W\u0014¼êüyñGº\u000fVXìÁ]\u0007«,vJ\\5ªâs«ý¹ñGº\u000fVXìÁ]\u0007«,vJ\\5ªâs«ý¹ñGº\u000fVXìÁ]\u0007«,vJ\\5ªâs«ý¹ñGº\u000fVXìÍ|# \\§Lµ\u001fÝ£å)Ö«Îñ\u0011ÿ\u0000²|eXÉî¡^ïT_Ç÷sónÏîon&¬\fËwãù.Ç\"®ÞxD\u001e¢íqÖ·kKc-NÊóïÚÄ3´ÜÝ2÷yÍÆ¹b¾TsOª|Sìs7\u001c¼<lìz¬eY¢õª¼t×\u001b³¾'àºe5æéÜ«Ø±ÏU¹çªßÖ>_\u0015/E[%ÒàtÕ¼DÅ\u0017cV¯)ôTNß\u0000\u0000\u0000\u000f\\\\LÛÑg\u0016Åw®O)ÞS5ÂY:íQ~ìÍ({s×è§ëóizv¤ãÅ+\u0014Ú§¦cÇTùæzP×v)Ù\r&?LZÂÎ¥\u001fª¯(ïôP´þçZDEyÙ\u0016ñ)áåÕðæø§ñ»h¶b;õY\u0019\u0013ÓÊ¯\u001f\bÔ+ÍÚç­Ì^ÒøË³ÓË»gÝ\u000bo8~ÔmNn½UU|å÷à®Õ;%.<kUÅRqxßr|e\u0011à®Õ;$ðWAêË\u001d\rj¸±Î¯öçÆQ\u001e\nè=Yc²O\u0005t\u001e¬±Ù)pÖ«Î¯öçÆQ\u001e\nè=Yc²O\u0005t\u001e¬±Ù)pÖ«Î¯öçÆQ\u001e\nè=Yc²_TðÆFûixÜþz7ù¥CZ®':¿Û\u0019p[Ð´[r4¼8éï\u0014ïÛ³²Ý«v©äÛ·M\u0011æ¦6ØÆs(ª¹]})\u0000aà\u0000\u0000\u0000\u0000\u0005ksdá«¢v¯&ºmÇ«Ç?\bÛÚ²³^èºdjöphéÅ£z¹ÿ\u0000®Ý©-SpÚh\u001c¶.ê¾\u001f|\u0010\u0017ßB\u0000\u0000\u0000\u0000\u0000\u0000Z;`ÆW\u0010NEQ½8¶æ¿ñO4|ç±¨)½Íñ{Þ1´Þ½ÉóÅ1õªW%\u001bÓn\u0003LÞå1GTlÿ\u0000~ \b\u0000xfeÙÁÃ»~®M«TÍUK\u001aÕµ;ú¾£w7\"~õs÷ißz\"\u0017®èÚÙÓ¬iôU´äWË¯oå§£¶c±­Ø§(Övz\u0007\u000b\u0014Zó¾­Ýßô\u0001aÑ\u0000êÓ3ïizÛ\u0013÷íU¾ßÍ\u001d1íg(oyªª¦­ÒÝ,_·ný©ÞÝÚ\"ºgÏ\u0013\u001bÃÑRán%Òìpî%ÌëV¯Z¦iªyö¾\u001b%¼*ÐzÎÇlµóDÄåç\u0017°W¨¹U\u0011DÌDÏT¥ÄGZ\u000fYØíÂ­\u0007¬ìvË\u001aµpEÍoö'ÂRïè¦åº­×\u001bÓTLLyâQ^\u0015h=gc¶O\n´\u001e³±Û&­\\\u000ekìO²,«\u0015ce^Ç«úV«ªõÄìóHñ\u0005Ë\u0017µüÛ¸×)¹jåÙ®©ñNüÿ\u0000ª9°°úUª¦«tÕ;æ!-Â¾Séÿ\u0000\u001f&ÄÇxWÊ}?ñcäØoô¡È{Cûôw}d\u0001]Î\u0000\u0002«Ý\u0013Éº1OÊ¦bÓ»¢y7Oæ)ùTÌWlt\u001dÖþ\u001fÆ@\u00137\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000ý¦©¢¨ªâc¡²è\u001a­:Îc2&9uSÉ¹\u0011Ñ\\xþ¾Ö2´ð.»\u001an¥8WëÛ\u001f.b\"gÅE}\u0013íñv!½Fµ9´ºg\u00078>µ1ú©Ûðëià)80\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001øý\u0001q·\u000bFru<\u001a6Æ¹Wïh\u0015º§¦=\u0013ðT\u001b¥û\u0016²±îX½DWnå3MTÏLK\u001b×t.­{\n½ægn©þ*'Å?ÿ\u0000tÄ®Y¹­\u0019K¶ÐºBoÑÈÜÕ\u001eqöGÐ\u000b\u0007\tpÝZîlÜ½\u0013N\u001dù?Ï?Ë\u001fª\u0017\u000f\u0012öve¬K\u0014ò®^®)¦=mJÓlé:u+\u0011÷mÇ=[sÕ=3(n×«\u0019FöKãç\u000bkR^QÇÑÓjÕ»6©µjh·DmM4ÆÑ\u0011æ}Ì\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001cùÙ´ü\u001bÙwçkvh§Óèö±\\Ü»Ù·²ïN÷/W5Õí\\»¡k±rºt|z÷¦ïÌyú)ý{<Ê:å2åÛh<\u001cÙ³7jµ|¾þ\tÝ\u0000\u0000\u0000\u0000\u0000\u0000\u0003[à«=ç0ãnzâªçÛTþ'Q¼;G{áÍ:n|j'ÓLOêkªÛT¾c«[\u0011]\\f~`\u000f*à\u0000Ë8û*r8»[ï\u0018öè¢;9_êVOrnñ6¡TÎû_ªÎoÑ\u0016ØÑ\u0019S\u000f¥à¨0Öé÷GÈ\u0001él\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001-Â¾Séÿ\u0000\u001f&ÄÇxWÊ}?ñcäØ/ô¡Æ{Cûôw}d\u0001]Î\u0000\u0002«Ý\u0013Éº1OÊ¦bÓ»¢y7Oæ)ùTÌWlt\u001dÖþ\u001fÆ@\u00137\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\r7øS\u001a\f»ñiÚù´ÇO®:{|ë[\n³zî=ê/Y¹U»O*©¦%¦p¿\u0019XÕ¨§\u00136ªlæÇ4O¾¯4ú;=\u0015.ÚËl8Ý-¢¦ÝSzÌ~¸áöù- +¹°\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001Rî¤Æ^N¡nÞâOÞÛ¦ñöNÓÚ¶¼ò,[ÊÆ¹v9VîÑ4U\u001exÚ^©«VsYÂß=ênÇTùu°±í^\u000emüKÓ³rhNÓ³ÇÇ;Cbú\\LU\u0019ÂñÜçIîßÕ®Óý_î¬ïçéOfÑíÐ´èÒ´\\\\=¢*¢ý5O<üe ×Ü«Z¬ß9Ò\u0018sª¾­ÑÝ\u0000\u000f\n \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u000bxÞµ¹³/DÅª<ßÚD|_GÅX\r©·\u0013\u0017³*¹f'Åé«Í\u001f6Y¨åÜÊÊ¹7.Üæg£Ñ\u001ehOjÖ¶ÙÜßh­\u0015V\"¨»v?GÏìò¹r»×*¹r©®ºæjª©æfz_ ¸í÷\u0000\f\u0000\u0000\u0000\u0000\u00006\u0007Éí7ò¿É\u000eôo\u000eWß8sN«\u001aæôDGèkjß/ß®Õ\u001eùù0\u0000\u0018¶½å\u000e¥ù»¿ç\u0002S-Í®&Ô)õUÛÏú¢Û*wCéøyÎÍ\u0013î\u0003)À\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0012Ü+å>ø±òlLw|§Óÿ\u0000\u0016>MRÿ\u0000J\u001cg´?¿GwÖ@\u0015Üà\u0000*½Ñ<§ó\u0014üªf-;º'tþbLÅvÇAÝh\u001fáüd\u00013x\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u00113\u0013¼NÓ\u0000\u000bvÇ¹X\u0011N>¥MYV#.Dþòÿ\u0000W·µ}Óu?Vµß0²h»ç§ÅU>¸ñÃ\u0014}Z»rÅÊnZ¹Uºéâª'ij\u001aìÓVØhñ\u0016Åù¨ý5yx7aiÜ{¬áDQ~ª3-ÇEØÚ¯ú£õÝdÃî¦^¼{øÕtÌm]1íñü\u0015æÍpç/èl]­ÔëG»ÓzÞ\"±¸CÊÛ½jxñ¿EÊ¹\u0013ÙVÉ+w­^§jå\u0017#ÏMQ(æ&7µÚ¹o§LÇ|>Àa\u0018\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003/îû7\u0010þÑLmNU¸¯üQÍ?(íFp¾\u0017íüGfczbç.¯6ÔýïÓojíÇúFN¥w\u0013\u001e»÷lÜftï<£ÇÛLv¸8\u000bCÍÂÔ²2³q.ØäÚäQß)Þfyöìø­ÅøÝu1¢óÖýQ\u0013\u001eþ\u0010¾\u0000¨ã@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001ó]Ê-ÓÊ¹]4Sçªv~O\u0011hØ÷íO\u001a&<qMÈª{#yf\"gsÝ\u0016ë®r¢&{B©Ý\u000fG±\u0013\u0018Ô_Ê«¢bM3í¹¨wBÕr¢iÄ¢Ö\u001d\u0013ÓLrêíoHµ\\õ6Vt>2ïõÊ=û>þM\u00177PÄÓ¬÷ìÌv(èçmýQÒ£ë½Ð®]±ôz&Ý3Í9\u0017#ïO÷c£×=¦äådf^Ù7î^¹>:«ªf^Iè³\u0011¿k¢Âh;6gZìëOßýØú¹r»·*¹rº«®©Þªªæeò\tÛíÀ\u0003 \u0000\u0000\u0000\u0000\u0000\u0000\u0000Ö¸*÷~áL>}æU\u0013ìªvølS{ewÍ++\u0016gÍè®=UGÖ\\ûRù¾·ÉâîSïÏÇh\u0003Â\u00002Î>Æ\u001cOræÛFEº.Gg'ý*ÓDî§MÝ?\u001fP¢æÅ|æ?¯\u0014öÇÅ¯ÚèÐôMè»¢xlðû\u0000$lÀ\u0000\u0000\u0001tÐø\u0012Î©£ØÎ¿vÕw¢gM11\u0011¼Ä|9Ýÿ\u0000f}cþE7hÉ©¯L`í×4UVØÙºYàÐþÍ0úÆÿ\u0000ý\u0010ù«¹<ÏÝÔîÄzmDþ§-G\u0017Æð]¯)gÂÿ\u0000ögg­+÷1õ>Ììõ¥~æ>§-G\u0016\u001aÀöü§Ñ@\u001d¾\r\u001an«EÙ»Mù<¹·óó8ÒÄçµ´¢¸®ªÒá_)ôÿ\u0000Åbc¼+å>ø±òlJúPãý¡ýú;¾²\u0000®ç\u0000\u0001UîäÝ?§åS1iÝÑ<§ó\u0014üªf+¶:\u000eë@ÿ\u0000\u000fã \tÀ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\njgzfbc¦\u0000aÓoTÔ-WFßËz¨ý^ôñ\u0006µDï\u001a¶g¶ýSóxÆPlÛôÇKÂMo­r½ì\u0012k}kïe\u001a\u001a±ÁçÙìG$¼$Öú×+ÞÉá&·Ö¹^öQ¡«\u001c\u000eog±\u001e\u0010ð[ë\\¯{'ßZå{ÙF¬p9½ÄxBKÂMo­r½ì½mñf½oú:éæÛïmWÎ\u0011\u0001«O\u0006'\rbwÑ\u001e\u0010²ãñþ»fc¾\\³~?ü¢?Ë²o\u0007ºM¦)ÏÁªß»5r£²vù³ñâmQ=JtV\u000eäm¢#»gÉµéÚ¾\u0006­o¾`åQ{o\u001d1;UO®'\u001d¬/\u001b&þ\u001dúoã]®ÕÚ'xªÚa¤ð\u0018Ó«í4ÛÌûµG4]úO¡^å§l9­!¡«ÃÓ7-Nµ>pµ¡\u0000\u0000\u0000\u0000\u0000\u0000\u001cùØº}½nÍ¸é®vßÕçDñ7\u0014XÐ1â\".æ\\íÛß=5z>l»PÔ³5LÈÍ¿UÚçÅ¼óS\u001ehMnÔÕ¶w7Z?D\\ÅF½s«O÷z¯ºt|\u001b34`bÜÉç®y\u0014û<sò@ä÷BÖïL÷¨ÇÇE½çã2«1jêu\u0016tN\u000eÔt3ïÛöLÜâý~äïV§r?»M4ü¡áá&·Ö¹^öQ£Ö­<\u0017#\u000bb7Q\u001e\u0010ð[ë\\¯{'ßZå{ÙFêÇ\u0006y½ÄxBKÂMo­r½ì\u0012k}kïe\u001a\u001a±Àæö{\u0011á\t/\t5¾µÊ÷²xI­õ®W½hjÇ\u0003ÙìG$jâ\u001dj¿\u001e«ì½T|¥ãsVÔ®ïß5\fª÷þkÕOêä\f¡ê,ÚÔÇöºë¹W*º¦©óÌîü\u0006R\u0000\f\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000-\u001dÏóÿ\u0000eâ\u001fÙê©Ê·49ãå1íj\f3\u0017\"æ&]¬SµË5Åtúâwmx9v³ðlåÙè½DW\u001eú\u0015/Ó·7\u001bí\u0006\u001fVí7£tìøÇÛäè\u0001]Í\u0003Ã7\u0012Ö~\u0015ìKñ½»ÔM5{XÎ«¦ßÒ5\u001b¸Y\u0011÷­Ï5]\u0015SÑ1ëm¨n\"áÌm\u0013^Öò-Çî¯DsÇ¢|ðÕÍYÛ¹¹Ñ:B0&ú3åïõd\u0003»TÑ³ôkók6ÄÑÏ÷kz+õKv&'sº¢ºk¦*¢s\u0000\u001eÇV§ÞÕ5\u001b8V#zîÕ¶ûF:gÙ\u000f\u001d?/RÈ|;\u0015Þ¹=\u0014ÇÓ3Ñ\rC¸^Ö7.Í73.Æ×+\u00151ü±èù£¹r){W¤t\u0018Ks·õNèú÷&ñ±íâãZÇµ\u001b[µDQLz\"6¨(>}339È\u0000Àüi¦væeúâýF4Þ\u001cÉª*Úåèï4zêñü7b3Ùµ7nSnó92­C&su\u001c©ß÷×j¯Ó;¹Á²}>b¤·\nùO§þ,|\u0013\u001dá_)ôÿ\u0000ÅbT¿Ò\u001dí\u000fïÑÝõ\u0005w8\u0000\n¯tO&éüÅ?*NîäÝ?§åS1]±ÐwZ\u0007ø\u0019\u0000LÞ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u000fÛw+µrê+¢biª'ió¿\u0001íõ¸×4z/Õ´_·÷/D4tû|i_À\u001aâkß²Õ?»Ë¢iÛûQÏ\u0013ókPP¹N­Y>y¥0±ÄÍ4î°\u0000­\u0000\u0000\u0000\u001cz®£kIÓ/æÞç¦Õ;Ä4ôG¶]\u000ftFyxºm\u0015sDMëçè§ýOtS­VK¸\f79ÄSnwu÷)Ù·õ\u001cÛ¹y5òîÝ«z§ôCÀ\u001b\u0007Ñé¦)Ý\u0000\u0003Ð\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u000bïs½j&=ê¹ã{7éâ§õíP¸¹7°ò­äØ®h»j¨ª£¢^k§Zñ¸XÅXsðïnb7AÖlke\u0019V¶¦¿èÝ·ütÂI¯¥óê·\\Ñ\\e0\u0000ÃÀ\u0000<ïYµjm_µEÛuxè®ª'Ù(\u001c¾\u0006Ðrª©Ç¯\u001e©ñÍæ>\u0013¼,C1TÆéMk\u0011zÏíÕ1Ý*|÷6Ò¹\\ÙqOfÿ\u0000ÊêÆà\r\u000b\u001e¨ªº/ämÑvç7ý»,Ã×)_\u0015´2¨ÊnKÃ\u0017\u000f\u001b\n×zÅÇ·bå·LD=ÁáFfjä\u0000`\u0000\u0006_ÇÌj\u001a¼aÚ«{8{Ó;t×ü]/d®\u001c]Ä4èlÑf¸ý²üLZå½\u001eO3333;ÌøåfÅ\u001fÚ]NÁN|æ¸÷GÖ~\u000bNµ-Â¾Séÿ\u0000\u001f&ÄÇxWÊ}?ñcäØ/ô¡Æ{Cûôw}d\u0001]Î\u0000\u0002/4Zuí:0ê¿6b.E|¨§âßê­}ÙëJýÌ}WîS\u0019D®ØÒ\u0018=\u001aªÊ;£ÑFû3³ÖûúfvzÒ¿s\u001fUäzåkâñ|wù<£ÑFû3³ÖûúfvzÒ¿s\u001fUä9Zøã¿Éå\u001e7Ù´¯ÜÇÔû3³Öûú¯!Ê×Äü_\u001dþO(ôQ¾Ììõ¥~æ>ª§\u0011hôèz­XTÞÑ\u0014SW*iÛÇèl³ü§¯ð¨ù%µ]UUËo¢1øF#RíYÆSÕ\u001eåh\u0005V\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u000f|\fÃÔ1ò©¦ÍÚkìÛLLDÄï\u0013â\u0010Û4³GÂ½;ïs\u001eÝS¿¦lDn+í\u0015\u001b-×ß\u001f'`\n®L\u0000\u0000\u0000d\u001c]û_\u0014f×¾ñE}î=\u001cÚ~1-}æÝïùù\u0017¦wïj«\\Ì¬aãlË¥övî×_\bËÇþ<@[v \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000ÐuÌ\u0007>2,ýûus]µ3´W\u001f_4µ­7RÅÕ°¨ËÄ¹Ë·W:iè$ÑuÌÝ\u000f/¿â×÷jæ¹j¯è×\u001eª\u001bõ¶ÆöIèºqq¯FÊãÏ½³\u000fp5ÛQÞkïy\u0011\u001b×b¹ûÑêóÇ¦\u0012ês\u0013\u0013¸{¶«µTÑ\\e0\u0000Â0\u0000\u0000\u0000\u0000\u0000\u0001\u001b®kº\u0016\fädO*º¹­Úç®~ypñ\u000f\u0017ahUfÜÆFfÜÖ©jgûSÑêñ³\u001dGRÊÕs*ÊÌ»7.UÙLy¢:!5»SVÙÜÞhÝ\u0011^\"båÝ|þÞóRÔru\\ëUò®W>.c¢#Ðå\u0005ØÅ4ÓE1M1@\u0000ôá_)ôÿ\u0000Åbc¼+å>ø±òlJúPã=¡ýú;¾²\u0000®ç\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000eå=GÉ©²Î?ò¿Â£äÇI½Ð\u001fËéú+@.;\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001b\u001f\fÕ\u0015ðÖ1ÿ\u0000ÁLvs1Ä?\u0011k\u0018¶(±cP½nÕ\u0011µ4ÄóD\"¹D×\u0019CU¥05ã-ÓM\u0013\u0011õ¶aøU¯uþØ<*×ºÎÿ\u0000l!ä*âÐþ^ÄvãÏÑ±\fwÂ­{¬ïöÁáV½Öwû`ä*â~^ÄvãÏÑ±\fwÂ­{¬ïöÁáV½Öwû`ä*â~^ÄvãÏÑ°\\«nªöß\u0013;0¬ñN»U3Lêwæ&6xE&µnhÏ6ëEhúðZúó\u0013[½Ùú%n@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001fVîWjå7-×U\u0015Ó;ÓU3´ÄúÖí\u001fº\u0016f,SgRµû]¸æïó\\Ò~\u001eµ<yª«z¶#\u000bg\u0013N­Úslzo\u0012é\u001a¬DcfQ\u0017'þ]ÉäÕÙ>?bU¤0µý[O]Bý\u0014Ç«L{'\u0005X~\u0012ç¯û=\u001bì×ðXôm\u0003/Çî­ÚÏ5ÛÚ~\u0013\u000eê;¥åD~óMµTÿ\u0000fäÇé(æÍmmZ\u000f\u0019NèøúäÐ\n{¦ÎÜÚDoùÿ\u0000WÎéys\u001f»ÓlÓ?Ú¹3ôc¯Äh\\tÿ\u0000O8õhoÏ\u0014o,¿#º\u000e¹z6·8øþv·ÿ\u00004Ê\u00177ZÔõ\bËÎ¿vþ\u0019®y='¸±WZÕ¯gñ\u0015têóÿ\u0000|Z¥Åº6\u0013\u00172é½r?åØûóôl©:Ï\u001ej:Ug\u000e?b±<ÛÓ;×1ýîgj®&¦Í4·]\r±:Ó\u001aÓïô&fffgy\u001c¹\u0000\u0000\u0000Kp¯úâÇÉ±0¼|Ø·è¿bäÛ»nw¦¨ñÄ¤¼*×ºÎÿ\u0000l ¹nká Ò.æ2å5ÑTFQÖÄ1ß\nµî³¿Û\u0007Z÷Yßí|\\Z¿ËØÜyú6!øU¯uþØ<*×ºÎÿ\u0000l\u001c\\OËØÜyú6!øU¯uþØ<*×ºÎÿ\u0000l\u001c\\OËØÜyú6!øU¯uþØ<*×ºÎÿ\u0000l\u001c\\OËØÜyú6!øU¯uþØ<*×ºÎÿ\u0000l\u001c\\OËØÜyú6!øU¯uþØ<*×ºÎÿ\u0000l\u001c\\OËØÜyú6&YÇþS×øT|\u001e\u0015kÝg¶\u001c\u0019¹:ù¿z«×f\"9UxöInÔÓ9Ëc£tMÜ%þRº¢c,¶<\u0000Nè\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001ÿÙ\r\n------WebKitFormBoundaryzK0dgGQItxw7AG27\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundaryzK0dgGQItxw7AG27\r\nContent-Disposition: form-data; name=\"mod_id\"\r\n\r\n12701\r\n------WebKitFormBoundaryzK0dgGQItxw7AG27--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Media - Your mod images

// resumableChunkNumber: 1
// resumableChunkSize: 8388608
// resumableCurrentChunkSize: 8631
// resumableTotalSize: 8631
// resumableType: image/png
// resumableIdentifier: 8631-cl-logo-white-on-pinkpng
// resumableFilename: cl-logo-white-on-pink.png
// resumableRelativePath: cl-logo-white-on-pink.png
// resumableTotalChunks: 1
// game_id: 4187
// mod_id: 12701
// file: (binary)

// fetch("https://www.nexusmods.com/Uploads?ModImages", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryiZlHpSBwCspewyyb",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=media&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableChunkNumber\"\r\n\r\n1\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableChunkSize\"\r\n\r\n8388608\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableCurrentChunkSize\"\r\n\r\n8631\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableTotalSize\"\r\n\r\n8631\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableType\"\r\n\r\nimage/png\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableIdentifier\"\r\n\r\n8631-cl-logo-white-on-pinkpng\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableFilename\"\r\n\r\ncl-logo-white-on-pink.png\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableRelativePath\"\r\n\r\ncl-logo-white-on-pink.png\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"resumableTotalChunks\"\r\n\r\n1\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"mod_id\"\r\n\r\n12701\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb\r\nContent-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n\r\nPNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0003è\u0000\u0000\u0001J\b\u0006\u0000\u0000\u0000èu(\u0000\u0000\u0000\tpHYs\u0000\u0000nº\u0000\u0000nº\u0001ÖÞ±\u0017\u0000\u0000 \u0000IDATxíÝ?l]Ç7àw@¬H6×\u0015C\u0003R%A4d¸Ð\u0002\"\u0004Ø\u001b1ã­èbíÎJ\u0011Vcv£J\u0011¹³¿Â·ZÇE¤FF\u0002\b\u0014°*\f\u000b&AU\u0012 .+ß\u0015Ùä+F7Ô_\"ï¹3gÎó\u0000\u0018g×~CÉ÷ß¼ïÌüÇ¿z×þ\u0015\u0000\u0000\u0000@V¿É]\u0000\u0000\u0000\u0000  \u0003\u0000\u0000@\u0011\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005ømî\u0002Ziv*b¡»ñY\u001dDlíä®\u0002×±8»ññ\u001cbR\u0016zé=î \u001emGl\f­\u0007à\u0019\u0002úa,ô\"þöaî*Æç\u000fßG¬læ®\u0002×á9\u0004{æg\"ÞÞ\u000bà\u000boDÌ\u001eKß\u001eSSeíñBÒÖnÄê¯éûÕ \u000f\u000e\u0000@{,ôÒ\u0004ÉÂ\u001b)Ð4ÉAÿâñçÿûµAÄ/\u0014ÞW\u0007\u0016C\u0011Ð\u0001\u0000(×âÜÞ×¤Âøaî=\u000eñ'÷þÚÚã >ú²cWÎF|v6w\u0015c\u00121\u0011Ð\u0001\u0000(ÇìTÄÅ\u0013\u0011K'R(9»¢Ã\u001böOÏ¤ÿ¼6¸ñ }­\u000eòÖ\u0006\u0014I@\u0007¶©é8Ø\u000bå<3¾=ã%\u001a\u0005öÏÎFllGÜ|\u0010ñÝº°\u000eüNÚËe$\u0007\u0000´¥\u0013\u0011Ë§^¼§»vóÓ©³þé\u0014Öûë\u0011ßÝwà\u001ctÎÁ¯\u001b\u0001\u00008ªÙ©KgR0Î]M\u0019æ§SWý³³\u00117\u001fF\\ÿYó\u0004:J@\u0007\u0000 yó3é\u0010°å¯þ¿í²ÇÓ×ÆvÄÕ»©³\u000etÆor\u0017\u0000\u0000@Åæg\"®½\u001fñÓÇÂùë¸v!â§OÒ´\u0001Ð\t\u0002:éÁ\t@{8$6\u0010ÌÇCPN\u0011ÐxÓþ/\u0000`Lf§Ò(»`>^£ þÏetP1\u0001\u001d\u0000ñX>:½Í]I½N÷\"þöaÄ·¿wÐ/TH@Ç;@ÛèQù\u001f>L\u001dÞc¹«éÇÓbÈ¥3¹+\u0001ÆH@?Ú®½pÅ\t\u00009míä®£¸t&]³p4q3Ç\"¾<\u0016GtÓ¡\n\u0002:.:@{,¼»ñZ\u001dä®Ã\u0018uÍ¿<¯kÛ¹¹ÔM_:»\u0012à\u0004t\u0012\u0007Å\u0001´0DnK'tÍK3s,â¥¯Îç®\u00048\u0002\u0001D\u0007\u001d \u001dì?'·¯Î§ h¡¨L>Þr`ä\u001dZI@'ÑA\u0007h\u0007/Ýä2;FÚ?u(YñN÷\"þ±\u001c±ÐË]\tð\u0004ôÃ\u001aîæ®`¼td\u0000ÚÁ\u000b79,ôR87ÒÞ\u001eóÓ\u0011?üw<h\u0019\u0001ý°VÍ]ÁxÕvà\u0010@­j{Ù^s@\\ñ\u0016z)è¶8Ô:3ÇÒéË§rW\u0002\u001cN2sÌ>t6¨í³Ú\u0015ke[KáÜ~óv»vAH\u0010ÐÙóq¢ÍÏ¤±UåS©û*×AHV\u0010Ð\u000fk«²=è\u0011õM\u0002ÔÆç4²|*\u0005:ê\"¤Cñ\u0004ôÃªm\u000fz\u0017?ÒÕø9½j\u000fzqóº]»Pçg\tTB@gÏéë{\u0000JVãKµ=èeYè¥{Î©Û·¿w#\u0004\u0014J@çi\u0017Oä®\u0000\u0017±ÿ¦Nk·ç¼~3ÇRH×â\bèUëHÞ\u000eP¤¥ã¹+hÆ£íÜ\u0015\u0010pÞ-óÓén{ (\u0002úaÕ:wñ¸ÕT\u0012}TéÁN\u001bÃÜ\u00150;pÞ=§miÒ\bè<Ï;@YægÒ44áËóþ|uÙ§gLPBA\u0004ôÃZÙÌ]As>:»\u0002\u0000ôÇ3¹+hN­[ÆÚâÒeÏýÎ»ö¾\tJ(ÎóÎÍ¥n\r\u0000ùÍNÕ}oq­[ÆÚ`¡ºç0s,âÛ¥ÜU\u0000! \u001fÍFÅ\u0007Û\\9»\u0002\u0000\"Ò¶£Z÷\u0006\u000fwsWÐ]³Sé\u0014o\u001897W÷b ´~\u00145\u001fl³|R\u0017\u001d \u00045/®þ»îºrÖµ}<ï«óFÝ!3\u0001ý(¶*_ù¯ù¥\u0010 \rO\tQßâ\\:\u0018\f5sÌ¶\u0007ÈL@?ÚWþuÑ\u0001òªÿú£\u000f\\-ÕìT:\u0010\f^fùdZÄ\u0001²\u0010ÐÙß_.ä®\u0000 .©wï9ù\u0018mç LQB6\u0002úQtaåÿÜ\\zI\u0004`r\u0016z\u0011uà\u0005¹\u000bÏÑ,ô¶s0çæÜ\u000e\bèGÑ«a®ü§QwIø\u0011d\u001aPû\tÆË^tÈB@?ÕAî\n&cæXÄÿ[rª'À$|y>ât/w\u0015¡>9Ë§RW\u0014\u000ej~Úµk~T5ßþ¤Ó=+©\u0000M»t&\u001dÐÔ\u0005î@,{9?Ú\u0012\u0001öÛÜ\u0005´ÞÆ°;­^\u001a/ßÊ[\u0007@Ouk!´öPJâ`¸§Ýy<¹±:xùvÅÙ©´gvª;\u0013-/rºNt7í\u0002\u0013# \u001fÕê [#cË'ÓKÕõ{¹+\u0001¨Çò©k\u001d»5ãQG&Ðr¸ôvî*òÙØ¸ù \u0005Ì_\u0006©±r\u0018\u000b½7RX]ëÖÇ¥·\u0005t \u0001ý¨\u001e\u001dò¾Í¾<\u001eR:é\u0000G×Åp\u001eqø Äëéâu}\u001bÛ\u0011ýõïîïÏÙê }õ×Ó^è¥àºt¢þïÅãé°`ÿÎÂDØ~T]9(îYË'#¾ý½ã\u0000â«óÝ\fç\u0011:rÐµîùÍ?|\u001fñÎ7\u0011Wï6\u001b(W\u0007©QñÎ7\u0011¬ÿL\"{Ñab\u0004ô£êj@H+ª?|V\u00018¸Ù©ôùÙå;©¸7ïb\u0007º»\u0011{Áüï'¿ð³µºêïõ#þ|·ÞÃ\u000f/º\u0013\u001d&E@?ª­úWM÷sº\u0017ñe§Ã\u0002\u001cÔò©>éÖù%Ï\u001aî\u001aÚÍÃÝ/nç\tæÏÚÚI]ûwû{ÐÕd~:ó\u0003\u0013ÐÇÁKFÄggÓ\u000bçb_8\u0001ö³ÐK]ók\u0017ºÑÕÜ\u0013Ü·t¢îÌîl¦0\\Ú¡µ\u001bÃ´`ðuau.:L>\u000e¹WmK1?\u001dñ·\u000fÓ\u000b¨ \u000eÌÏD\\{?M\u001bu¹kþ$ÏÍæ]ªxûÄ×÷R\b.¹Aòùí´7½&:è0\u0011Nq\u001f.ïCss)¨¯\r\"þzoïÄS.Y:BPþ<ÏÍfÍÏÔûçîòíy¯\u0018ÕYËA3ÇÒçÚ\u0007¹+ª\tèãð\u0017\u0017:ÝK\u000f¥¯Î§\u000fóë?{)\u0003ê¶ÐøèT\u001a\u0005­y¼ø¨<7UëÛm\nç#µô\u0002:4M@\u001fa:(ÎËØÍ\u001cK×²-L\u0007ºÜxÆ\u001bo>Hª\u0000´ÕìTÚÒ³8'\u001f\u0003âWã^á6óþzÄ[½:nm°\u0011\u001a' ËêÀÙA<\u0019ÖãBZØXÙL\u0007\u0006­\u000eìK\u0004Ê¶8Æßê¥ïO»fòµùoVÃýùn{ÃùÈç·ëøÌNB&\"¡1\u0002ú¸¬ü_º\u0017×3?ý8¬Üûk\u001bÛ©»²:H\u001döÑ¯£ï\u00012?\u0013ñætê/ôö~©/ôäâ\u0004÷fÕÖ=¿ù0]_V?ÝJE¶Ýâ÷1h>.:\u0002ã3?¾^uÀÍËî\u0019\u001d\u0005z÷äÏÆÏ©\u000e£\u0000ùì÷<ïe£µ\u001e¦U*ÏËfÕtÒöÆvÄå[¹«\u0018ÕA:¾í£î¿+ïz;¨>.«´¯®ëwÛNÒË^ª½l¿ÑÄÂÊfÄ£'¾§,\u000b½7Rwwq.ñ¶JÒM>_³t¢®÷Ë·ê[H¾z7bùT»ìCF\tèã´²iÌöyÙÄÂÍ½s\u0001Ø:y£Ç\u0016ç,:QM>1\u001e5\u0005§þý:\u0017s¶vÒ­6Í]ÉáÍ\u001cKÛ~\u001cö\b\u0010ÐÇÉ>tjrîq0\u001câÝ|ºÓ÷1;ö.ð9B½,ö5«ýçÃÝ/nç®¢9×ïµ; G¤2\u0005th>N7\u001eF|y>w\u0015ÐÇ\u001f\u0007Ç\u000b{a½í§ê`éD\u001aw\u0014Êé\u001a;¢¥XèÕsáõë^\bÞÚIÏÑ6î/ô,¸AC\u0004ôqr\u001f:]1\nëWÎ¦~ý^Ý/Sã6;n/¸ô¶Ï\u000bºccÛÉÏMªe¼}c»SÛ÷Ó_ow@¯åÏ\u001b\u0014è7¹\u000b¨ÎM«tÈüt\u001aÓûé\u0014Ög§rWT¶Ù©ôsúé4m#Ó%ºçÍZü]î\nÆ£\u000bá<¢ýÝçùÜ\u0015@µ\u0004ôqó\u0002B\u0017Í\u001c\u0013Ô_åÒôóùìl»OïÃ²Ý¬\u001a:ÃÝný9¹ù0w\u0005g\u0019\u001a# Û\u0007é\u0001\u0003]4\nêÿX®ë.Þ£XÛë\u000bætÕp·ý\u001dÃ-ôêø|é¯wk»Ôê¯¹+8\u001a\u0016 @\u0002z\u0013¼ÐuóÓ\u0011ß,E|ûûîvÓg§\"¾:\u001fñ·\u000fu\u001aÀtY³j\tJ½»Éòï\u0005ð\u0002\u0002z\u0013º4\u0005û¹x<ukyy<¨^\"\u0018]Q\u0007]gáºY\u000boä®àèÖ\u0006Ý»¶«í&víÙ\u000e\u0013\" 7Á;ì9ºÈWZ~çëA-Já\\×\u001cá®+\u0019öV/w\u0005G×µîyD\u001aç÷¾\b<C@on\u0001<í³³õ¼_{?âÚÜU@Y<\u000fwºÞÕqï6ïC¯ar\u0003\nä\u001eô¦\\ÿ9Ýs\fì¹x<â\u000f#>ø¾®f§\"¾]8gÜ\u000f£{Þ¬\u001aÆ»8Þ>òÝýö.N<ÚÎ]\u0001TI@oÊê bcÛ+<ët/ô?Ýjÿþ»\u0014Îø°\u000e\u0016ÛÆv{ÃG[,TðÙÓå)\u000b\u000bXÀ3¸7éúÏ¹+2îEüð_í±\u0014ÎaÂGóÞÉ]ÁÑYÄ\u0001ø7\u0001½Iýû¹+rÍ\u001cK!½­{Òsxµï<\u0007\u001b×öÎ\b\u0001\u001dà\t\u0002z¶vtØÏÌ±\u0014rÛ\u0018ÒsØ_ÿ~w÷\u0015OÒ|Ë;èws'\tèM3æ\u000eû\u001bíIoSH¿ö¾p\u000e¯b¼}2Ú~Öî9ÀS\u0004ô¦­\u000e¬\u000eÃ«îE|y>w\u0015\u0007så¬\u001b\u001aàUîl\n^PÃx{\r\u0002>\tWïæ®\u0000Ê·|2âÒÜUìoéDºÏ\u001dØçÞd´iòèe\u001eÙ\u0006\u0001ð$\u0001}\u0012V6uÑá ¾<_nGh~&¶\u0003û[\u001bèOJÛ÷Gè \u0003<C@\u0014Ý\u00048o_fWè/\u0017Ò¡vÀþ>¿»îx³åûÏ×sg\tè¢\u000e\u00073?]^§úÊÙss¹«òÙ{ÎëØÚÉ]\u0001@q\u0004ôIÒE¹x<í÷.ÁBÏ¾s8(Ï¹ÉZlùÂ¡ñvç\bè´²\u0019qóaî* \u001d®½_Æ¨ûW-9]\u001erÓ=çué \u0003<G@´ÏoG\fwsW\u0001å9FËsºtÆh;\u001cÔ~Ì]\u0001móh;w\u0005\u0000Å\u0011Ð'mc\u0018qýçÜU@;|z&ß©î³S\u0011Wþ3Ï?\u001bÚæÏwÓóÉjû)îþÌ\u0000<G@ÏáêÝ\r«Æp ¹FÌ¯uj;\u001cÄÆvÄõ{¹«è¦ùâ\u000eÀs\u0004ô\\.ßÊ]\u0001´Ã¹¹É\u001f4?º÷À«]¾e/1\u0000ËÊfÄ×:\u000ep ¾v-÷Þwh¯ï9\u0018Ãs;Às\u0004ô®ÞXópWX>5¡ÖLÄòÉÉü³ Í6¶]«ÆÑ¼\u0000xÓÖNÄºÃLª«­{\u000e\u0007óñß\u0005,\u0000\u00183\u0001=·ÕAÄ\u0017·sW\u0001åD\u0017]÷\u001c\u000eæÛÆ\u0001 \u0001\u0002z\t®ßèßÏ]\u0005ï\r\u001fÜ¦{\u000e¯vó¡SÛ\u0001 !\u0002z)¾¸m?:¼Êé^s'ºÏNéÃ«¬\rÜB\u0002\u0000\r\u0012ÐK±µ\u0013ñß7\"»¹+²]z»¡¿¯kÕ`_ÃÝô²ï\u001c\u0000\u001a# dc\u0018ñÁÿ\bé°ÇÓ^ñqÔ)ñÐFÃÝô|Ú\u0018æ®\u0004\u0000ª& fuNÆ\u0005^î£1¢/HÐ\u0001/ö¹Cá\u0000`\u0012\u0004ô\u0012­lF\\þ1w\u0015P®qw»uÏáå.ÿ\u0018Ñ_Ï]\u00055jb\u001a\n å\u0004ôRõ×txùéÔõ\u001eËßk&Í\u0003Ï\u0013ÎiÒ&\u0000% LH»8¦¾$Ã\u000b\tç\u00000q\u0002zéúë\u0011øÞÁqð¬åéj´£úÈx;<e¸\u001bñÉ\rá¼\rîlæ®\u00001\u0013ÐÛ`eÓéîð\"Gí¢/ôÒÝê@2:­ýÆÜÐ\u0005\u000b>\u0001% ·Åê âo\"Ö¢\u000bÿvÔ}èºç°gm\u0010ñnßiíLÎ8¦ \u0000*# ·ÉÖNÄ\u0007ßGôïç®\u0004ÊpñøÑ^ðÆµ\u001dÚ®?=_ÜsÞ.[-¬\u0013Ð\u0001# ·ÍÖNÄå[éð\u001e#ïpø=?ãîsøâvz®líä®×µúkî\nÆ;Às\u0004ô¶ê¯§}FÞéºÃ¹;½®[\u001bD¼×¸~/w%t\u000e:Às\u0004ô6[}¼_ðÏwsW\u0002ù,Î\u001dîÿÏþsºìë{i¤Ý~óvkûïC:\u0001# ×àêÝÔ\u0005ÑM§f½~\u0017}vÊ!Ý´6HWw~~ÛH{\rjø=4æ\u000eð\u0014\u0001½\u0016£nú\u0017·íM§{^·~Ø®;´Õp7M[½ÛOWwRGÛ¹+8º7grW\u0000P\u0014\u0001½6×ï¥ëØôN¼nàvz;]Ò¿\u000bWmªN\r§îë \u0003<E@¯Ñè¤÷w¾\u0015ÔéÓ½t*ûAé Ó\u00057\u001f¦ç\u0013ÚëÖöím>\u0001\" ×lc(¨Ó\u001d\u0007}És½\u001aµëßOûÌ?þ{\u001d\u001dVö×öÅ7rW\u0000P\u0014\u0001½\u000b\rêö¨S£\u0006tÝ\u001ajÕ¿¿×1·Ï¼;Úþ{=sÌ;À\u0013~»\u0000&h\u0014Ô¿X>\u0019qémDê! ÓE\u001bÛ\u0011ýõtþHÛ;©\u001cN\r\u0007Å-ÎµÿÊ81\u0011Ð»hk'½Ì]¿\u001eË§R`6N×§½*¤\bèÔ ?âæ\u001b\u000frWBn5lcXü]z'\u0001@@ï¼ÍôõÅít²õÒÇsW\u0005³8·`±ÿ6»ù0ýù¾ù@·=m\u001fqHï\u001d\u0007Y`\u0005è\u0000\u0001dk'Iö×ÓCr\u0014Ö\u0017çÒþ0hÞþ\u0001ý-û\u001cián\n_B9¯²6H·Y´ÙÅ\u0013é\u001d¤kOE¼ÙàÂñÖNsÛ\u0007ü{C\tè<ïÉ°\u001eBú(¬·ý\u0005º½j|ÝADnm°\u0017Êkè2\u0019¿T\u0010Ð:\u001aÐ¯mïd×Í\u000f¾Ï]\u0005TG@çÕFcð\u0011©»¾8Îâ\\Ä9ûy)È«þ<ÚNiî<þ|]}\u001cÌuÉ9Íö%ÓÅ1÷Ù©öó\bÝshÎëÙÚI'Ç\u0017zé\u001eÓ·z{ß\u001b'åS/?4É\u0012¹\fw#VM/´¿\fö¾qXý5w\u0005ã±|²[Åµ}Ñ¸K)0A\u0002:G·:H_ý'þÚìÔã°ÞÛëºG\bH4ïÚÜ\u0015Ðew\u001eO\u001bºá£ÏG/²4iu\u0016Ú¾8~ém\u0001½M,2B#\u0004t±µóôhü³FÁ}~fïp'¿\u0010æ2ÜyâsìÑöÞÆßÛ/Nn+í¿e~:MAue/úÅ\u0013¹+8\u001a\u000bÐ\b\u0001<þ½êú/µ£Î|\u00163FF+î³Sí?\u0014ü6ö\t]\u000bO\u0006nhÿk@H¦u! /ôÚ½ÿ<¢{Ï\b\u0010\u0001v\u0019uæ»äUÿ{G\u0016£\tÅ9÷}ó´'÷??\u001a>þU\u0018ªÜx\u0018ñåùÜU\u001c]WºèÞÎ]ÁÑ¬\u0019o¦\bèÐvÿ^´x&ÈÏÏ¤û\u0016ç\\×5\u001bÛ{[LV6\u0005qèaúw¿ÅÙ+g#n>¨wzv*]+×f¿\bèÐ\u0014\u0001\u001djµ1L_£\u0013÷çgöî´¯a\f§­\r\"¾[O]4\u001cºéæOÏä®âèæ§#.¸z7w%Í¸t¦ý\u0007úÕrs\u0000\u0014H@®Ø\u0018Fôilpv*\u001dNóÇ3:ëm¶±~?¿»/\u0003i®\u001e\u0011ñÙÙ´À\\ÛIá³Sí\u001foèÞvC \u0001\u001dºhk'\u0005»þzêª/J÷ÏÒ\u000ew6ÓUD£é\bz®[\u001bùËû\u0011\u001f|_×¨û³íÿý\u0019îÖ·p\u0002\u0005ùMî\u0002ÌV6#.ßxçÛþýÜÕ°;\u0011ø>½°\nçÀÔôÙpºWÇÁw#suL8èC£\u0004t Ù\u0018¦ þïÎZánÄå\u001fS0÷b\u0004ìçúÏ¹+\u0018¯åiÊ«íf§\"®½»ñ¨i\u0011\b\n$ \u0003O[Ùx·\u001fñçJ\u000fçi¯ïE¼óMýW\u000e\u0001ã±:HçSÔäÚöôkï×qÂ~D:\u0010h\u000e¼ØÕ»\u0011ïõuÓs\u0019îF|r#âóÛuí¿\u0004Wã^Cúµ÷ë¹=emà\u0004\r\u0013Ð[\u001d¤±ê\u000fsWÒ-k4Å`\u00108ï*=O¤!ýÚûu\u001dÂú×{¹+ê\tèÀþ¶v\">þ»\u0003ä&eíñ¢kÓÃÚ\u0018Ö»°zíBÄW-98®¶p\u001ea¼\u001d&@@\u0007\u000eæò-!½iýûõ])\u0004äQÛaqOúôLÄ?#ægrWòbó3©¾êÂùCÏ'\u0000\u0001\u001d88!½9k/ì7\u0007Æde³¾ÃâtºBð³¹+yÚ¥Ç\u0007§{¹+\u0019¿\u001aÏ6\u0002\tèÀë\u0011ÒÇo4Ö.\u0003ãtµòÛ8fE|v6â§OòïM_KÁüËó©®Úll;\u0017\u0005&D@\u0007^ß\u0017·î>.ÃÝÿ¾!\u0003ã×_¯»>2?ö¦úìÔäþÙË§\"~ø0âo\u001fÖÙ5\u001f©yË\u0004\u0014æ·¹\u000b\u0000Zhk'Ê.×Ù)¤Ë·\u001c\b\u00074§¿ºÌ]0\nêq!í¾ñ \u001dj6î\u0005Ð¥\u0013\u0011\u0017O¤_»ð\f\u001cî\t\u0012ÐÃÙ\u0018¦;º¯]È]I{}}ÏÈ Ð¬ë÷\".½Ý ù¤Ç\u001fß=~!M|­lF<\u001a¦ëCW_ã.ïÅ¹Ô_è¥ïÏÍ5Zv®ÿlÊ\u000b&H@\u0007\u000e¯¿\u001eñÑÉn¾°\u001cÕÆvýûCü¶v\"®þoÚ\u001bÝU§{/\u001f?¿³ùü_[x£{\u000b\u001a/3ÜM<¼ÚBÅ[\u001c\u000eëÑ¶)ÁC\u0010Ð£ùÓ\u0011?}»öqb;0)£.úütîJÊcyºç\u0007×åE°ùó]ÍCpH\u001cp4\u001bÃô\u0001ÌÁÝÙ4Ú\u000eLd^î9d! \u0003Gwý^zs0^Ië¯¿x\u001b^æêÿêC\u0006\u0002:pt[;®`9¨;é°\"Iûüvî\nhmÝsÈD@\u0007ÆC\u0017ý`tÏ\\V\u0007éö\bxË·rW\u0000% \u0003ã±µc_õ«®ú\u0001ÈåêÝÔ\u001d¹ùÐ³\n2\u0012Ðñ1æ¾¿¿ê\\\u0001míèòrÃ]> 3\u0001\u001d\u0018ÕAê\u0012ób7M\u0018\u0000\u0005XÙ4êÎ]¾å`8ÈL@\u0007Æë»õÜ\u0015éæC/=@9®Þµ ÊÓn>´U\r\n  \u0003ãuãaî\nÊä¥\u0007(ÉÖNÄn9ÜdcÛh;\u0014B@\u0007Ækc¨+ó\"ÆÛÒ¬\u000e\\½FòñßMyA!\u0004t`üþú´;^|2õ×#ú÷sWANL5@\u0011\u0004t`üs?ÍÏ\u0003(Ùå[&ºª?-Ò\u0000Å\u0010ÐñÓA\u0007Pº\u000f¾\u0017Ò»fm`ß9\u0014H@\u0007qG(ý7£@é\u001c\u001a×-k´(\u0003\u0014G@\u0007¡kX¨\u0000Úbu\u0010ñÁÿ\béµ\u001bîFü÷\rg£@¡\u0004t \u0019ºÆ\u0003Ð&BzÝ»é÷wc»\u0012à%\u0004t \u0019<ü#\"â\u0017\u0001\u001dh\u0019!½N£pná\u0018& \u0003Íð\u0002¬þ»\u0002×'¤×E8Ö\u0010ÐæØíe\bh/!½\u000eÂ9´\u000e4g«ã/u\u001bÛ¹+\u00008QH÷yÖNkwûÂ9´\u000e4§ëãÝ\u000eá\u0001j°:x¯ïô¶¹³®Ró,V\u0011Ðæ<êxÇEÇ\u0002¨ÅÖN\n{ýû¹+á ú÷Óï«Ô u\u0004t 9]_µ÷b\u0004Ôdk'âò­/nç®ý\\þ1ý>\u0001­$ \u00034¥ë\u0013\u0004@®ßK#ïö¥ec;ý¾ô×sW\u0002\u001c\u000e4g¥ã§¸w}\u0000¨×h_úÍ¹+!\"´¿ç08¨\u000e\u0000ÀëÛÚøøï\u0011Üp\u0015[.ÃÝôó¿|Ë¶*¨\u000eÐ\u0014\f \u000bn<xç\u001b\u0007ÈMZÿ~ú¹ßx»\u0012`\u0004t Yw:<æ®\u0001tÅè\u0000¹?|ï:¶¦­\rÒÏY×\u001cª$ \u0003\u00000\u001e+\u0011ïöÓIâÆÞÇk¸NÐ·ï\u0017¨Øos\u0017\u0000\u0000@eúë\u00117\u001fD\\:\u0013qéíc¹+j¯ánÄõÓéù:æP=\u0001\u001d \t:G@×míD\\½¥ þú\u0004sè$\u0001\u001d \t«¿æ®\u0000 \fO\u0006õ'\"®Î]U¹6¶Ó\u0004`\u000e$ \u0003ÍZÙ87»\n\u0000rÛÚIÁ³¿\u001e±t\"bùTÄÅã¹«*ÇÍïî§\u000fÐY\u0002:\u0000\u0000uãAúX:Æß»ØUßØN{õÿz/bc»\u001a \u0000\u0002:\u0000\u0000yl\fÓ(÷õ{\u0011\u000b½NE,ÎEîå®¬9£PþÝzÄª+é§\tè\u0000\u0000ä·:øüvú~ÔY_ü]\u001dcðk½©\u0001¡\u001cØ\u000e4ke3\"îæ®bò\u001emç®\u0000 ½ì¬G¤®úâ\\ÄÂ\u001bé×ÒO¿³«ô«ÃÞ\u000e¦«ï\fµZÙÌ]A+ýÇ¿z×þ»\b\u0000\u00008°ù·zi,~áÙcy\u000e$ÝØN\t+iavõW\u001dràH\u0004t\u0000\u0000ê0;B{Dê´?û×F\u0016Þxy\u0017þÎ3]¿­Ý½«3\u001f=\u000eä£_\u0001ÆL@\u0007\u0000\u0000\u0002ü&w\u0001\u0000\u0000\u0000\u000e\u0000\u0000\u0000E\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001Â\u000fÎ¬\u0000\u0000\u0001]IDAT\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005\u0010Ð\u0001\u0000\u0000 \u0000\u0002:\u0000\u0000\u0000\u0014@@\u0007\u0000\u0000\u0002\bè\u0000\u0000\u0000P\u0000\u0001\u001d\u0000\u0000\u0000\n  \u0003\u0000\u0000@\u0001\u0004t\u0000\u0000\u0000(\u000e\u0000\u0000\u0000\u0005ømD¼»\b\u0000\u0000\u0000èºÿ\u000fíÍá\n¦\u0000\u0000\u0000\u0000IEND®B`\r\n------WebKitFormBoundaryiZlHpSBwCspewyyb--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Media - Save

// id: 12701
// game_id: 4187
// action: next

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SaveMedia", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=media&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "id=12701&game_id=4187&action=save",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Documentation - Readme

// resumableChunkNumber: 1
// resumableChunkSize: 8388608
// resumableCurrentChunkSize: 1773
// resumableTotalSize: 1773
// resumableType: text/plain
// resumableIdentifier: 1773-readmetxt
// resumableFilename: readme.txt
// resumableRelativePath: readme.txt
// resumableTotalChunks: 1
// file: (binary)

// fetch("https://www.nexusmods.com/Uploads?Readme", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundarytPpPL5LyKjsh9xlC",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=docs&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableChunkNumber\"\r\n\r\n1\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableChunkSize\"\r\n\r\n8388608\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableCurrentChunkSize\"\r\n\r\n1773\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableTotalSize\"\r\n\r\n1773\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableType\"\r\n\r\ntext/plain\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableIdentifier\"\r\n\r\n1773-readmetxt\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableFilename\"\r\n\r\nreadme.txt\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableRelativePath\"\r\n\r\nreadme.txt\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"resumableTotalChunks\"\r\n\r\n1\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC\r\nContent-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n\r\n# Catch - 1-SFCP - 11860-VDI\n\nThis is a compatibility patch for:\n\n- [Starfield Community Patch (SFCP) (1-SFCP)](https://www.nexusmods.com/starfield/mods/1) by [Starfield Modding Community](https://next.nexusmods.com/profile/StarfieldCommunityPatch)\n\t- Permission to patch granted by:\n\t\t- [License](https://github.com/Starfield-Community-Patch/Starfield-Community-Patch/blob/main/LICENSE)\n\t\t- [Nexus Mods - Mod Page - Permissions](https://web.archive.org/web/20241210025600/https://www.nexusmods.com/starfield/mods/1)\n- [Varuun DLC items in base game](https://www.nexusmods.com/starfield/mods/11860) by [Morte78](https://next.nexusmods.com/profile/Morte78)\n\t- Permission to patch granted by:\n\t\t- [Nexus Mods Page - Comments](https://web.archive.org/web/20241210030355/https://www.nexusmods.com/starfield/mods/11860?tab=posts)\n\nBoth make changes to the same Leveled Items. This compatibility patch merges these so you get the best of both worlds.\n\n> [!IMPORTANT]\n> This compatibility patch is an independent creation and is not affiliated with, endorsed by, or officially supported by the original author(s) of the mods involved.\n\n## Recommended Load Order\n\n1. Starfield Community Patch (SFCP)\n2. Varuun DLC items in base game\n3. Catch - 1-SFCP - 11860-VDI\n\n## License\n\n<a href=\"https://github.com/catch-group/cl/blob/1.0.0/cl.md\">\n<img\n\talt=\"Catch License 1.0.0 Badge (white on pink)\"\n\tsrc=\"https://github.com/catch-group/cl/blob/1.0.0/images/cl-logo-white-on-pink.svg?raw=true\"\n\twidth=\"150\"\n/>\n</a>\n\nThis compatibility patch is licensed under the [Catch License 1.0.0 (CL-1.0.0)](https://github.com/catch-group/cl/blob/1.0.0/cl.md). Compatibility patches must comply with its terms.\n\nAdditionally:\n\n- Starfield Community Patch (SFCP) is licensed under the [MIT License](./licenses/1-SFCP.md).\n\r\n------WebKitFormBoundarytPpPL5LyKjsh9xlC--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Documentation - Save

// game_id: 4187
// input-method: 0
// new_version[]: 0.1.3
// new_change[]: Even more changes
// new_version[]: 0.1.2
// new_change[]: More changes
// new_version[]: 0.1.1
// new_change[]: Changes
// new_version[]: 0.1.0
// new_change[]: Initial
// new_version[]:
// new_change[]:
// mod-version: 0.1.0
// change_text:
// id: 12701
// action: next
// readme_file: readme.txt

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SaveDocumentation", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundary5iQIGPc55cnnrXCo",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=docs&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"input-method\"\r\n\r\n0\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_version[]\"\r\n\r\n0.1.3\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_change[]\"\r\n\r\nEven more changes\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_version[]\"\r\n\r\n0.1.2\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_change[]\"\r\n\r\nMore changes\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_version[]\"\r\n\r\n0.1.1\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_change[]\"\r\n\r\nChanges\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_version[]\"\r\n\r\n0.1.0\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_change[]\"\r\n\r\nInitial\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_version[]\"\r\n\r\n\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"new_change[]\"\r\n\r\n\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"mod-version\"\r\n\r\n0.1.0\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"change_text\"\r\n\r\n\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n12701\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nnext\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo\r\nContent-Disposition: form-data; name=\"readme_file\"\r\n\r\nreadme.txt\r\n------WebKitFormBoundary5iQIGPc55cnnrXCo--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Permissions - Save

// game_id: 4187
// user-comments: 2
// self-discussion: 1
// bug-reports: 1
// endorsements: 1
// tags: 1
// upload-images: 2
// upload-videos: 2
// stats: 1
// archived_files: 1
// distrib-assets: 1
// upload-other: 1
// convert: 1
// reuse-assets: 3
// use-assets: 3
// perm_earn_dp: 2
// permission-additional: This compatibility patch is released under the Catch License 1.0.0. Any redistribution or modification that constitutes a “Compatibility Patch” must adhere to the license terms, including proper crediting of the original Mod’s Author and maintaining the Catch License for all downstream Compatibility Patches. If you create a patch for this patch, treat the Author of this patch as the original Author under the Catch License terms. Any attempt to change the license terms or restrict freedoms granted by it violates the conditions.
// credits: - Mod Name 1: Mod Author 1
// - Mod Name 2: Mod Author 2
// - This Patch: A full list of contributors to this and other patches
// id: 12701
// action: next
// team:

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SavePermissions", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryCsBMlNACHjCoiO2D",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=permissions&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"user-comments\"\r\n\r\n2\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"self-discussion\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"bug-reports\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"endorsements\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"tags\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"upload-images\"\r\n\r\n2\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"upload-videos\"\r\n\r\n2\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"stats\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"archived_files\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"distrib-assets\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"upload-other\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"convert\"\r\n\r\n1\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"reuse-assets\"\r\n\r\n3\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"use-assets\"\r\n\r\n3\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"perm_earn_dp\"\r\n\r\n2\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"permission-additional\"\r\n\r\nThis compatibility patch is released under the Catch License 1.0.0. Any redistribution or modification that constitutes a “Compatibility Patch” must adhere to the license terms, including proper crediting of the original Mod’s Author and maintaining the Catch License for all downstream Compatibility Patches. If you create a patch for this patch, treat the Author of this patch as the original Author under the Catch License terms. Any attempt to change the license terms or restrict freedoms granted by it violates the conditions.\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"credits\"\r\n\r\n- Mod Name 1: Mod Author 1\r\n- Mod Name 2: Mod Author 2\r\n- This Patch: A full list of contributors to this and other patches \r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n12701\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nnext\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D\r\nContent-Disposition: form-data; name=\"team\"\r\n\r\n\r\n------WebKitFormBoundaryCsBMlNACHjCoiO2D--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Requirements and mirrors - Save

// game_id: 4187
// req-dlc-1: 1
// nexus-req-note-6331:
// nexus-req-note-12101:
// mirror-name-1: GitHub
// mirror-url-1: https://github.com/catch-group/catch-collection/releases/tag/Catch%20-%206331-TNV%20-%2012101-FDK%400.1.0
// id: 12701
// action: next
// external-requirements-counter: 0
// mirror-counter: 1
// nexus-requirements: 6331,12101

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?SaveRequirements", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryk0mwT4ogAicBeiwN",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=requirements&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"req-dlc-1\"\r\n\r\n1\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"nexus-req-note-6331\"\r\n\r\n\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"nexus-req-note-12101\"\r\n\r\n\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"mirror-name-1\"\r\n\r\nGitHub\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"mirror-url-1\"\r\n\r\nhttps://github.com/catch-group/catch-collection/releases/tag/Catch%20-%206331-TNV%20-%2012101-FDK%400.1.0\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n12701\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nnext\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"external-requirements-counter\"\r\n\r\n0\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"mirror-counter\"\r\n\r\n1\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN\r\nContent-Disposition: form-data; name=\"nexus-requirements\"\r\n\r\n6331,12101\r\n------WebKitFormBoundaryk0mwT4ogAicBeiwN--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Manage files - Add a new file - Upload

// resumableChunkNumber: 1
// resumableChunkSize: 5242880
// resumableCurrentChunkSize: 1593
// resumableTotalSize: 1593
// resumableType: application/zip
// resumableIdentifier: 1593-Catch-6331-TNV-12101-FDKesmzip
// resumableFilename: Catch - 6331-TNV - 12101-FDK.esm.zip
// resumableRelativePath: Catch - 6331-TNV - 12101-FDK.esm.zip
// resumableTotalChunks: 1
// file: (binary)

// fetch("https://upload.nexusmods.com/uploads/chunk", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryRE4grjegJfiWxdTE",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-site"
// 	},
// 	"referrer": "https://www.nexusmods.com/",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableChunkNumber\"\r\n\r\n1\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableChunkSize\"\r\n\r\n5242880\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableCurrentChunkSize\"\r\n\r\n1593\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableTotalSize\"\r\n\r\n1593\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableType\"\r\n\r\napplication/zip\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableIdentifier\"\r\n\r\n1593-Catch-6331-TNV-12101-FDKesmzip\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableFilename\"\r\n\r\nCatch - 6331-TNV - 12101-FDK.esm.zip\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableRelativePath\"\r\n\r\nCatch - 6331-TNV - 12101-FDK.esm.zip\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"resumableTotalChunks\"\r\n\r\n1\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE\r\nContent-Disposition: form-data; name=\"file\"; filename=\"blob\"\r\nContent-Type: application/octet-stream\r\n\r\nPK\u0003\u0004\u0014\u0000\b\u0000\b\u00007¶|Y\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000Á\r\u0000\u0000 \u0000 \u0000Catch - 6331-TNV - 12101-FDK.esmUT\r\u0000\u0007{åHg¬Zg0\rYgux\u000b\u0000\u0001\u0004õ\u0001\u0000\u0000\u0004\u0014\u0000\u0000\u0000ÕÝnãD\u0014ÇíR°\u0005i/ö\u0011wUÖýH\r\u001f[ÇvºÕ¶Ý(IY-,¬\u0006{ÚÖ\u001fÁã¤Dh%\u0010\u0017\\\"wØGà\u000bx\u0001.Q_\u0001¸3¶&t£~Ð­´¾±gÎ3ÿs~3r×é¬;\u0000 ÀÉ³©\u0002Üsìö\røþ§Á]Uv\u0015\u0000¬=s\u0017½vÍN÷Mè$4>àÌ÷ÊL\u0004ißMèîuúÔe»<äáaÚ¿ÕÞoyK\u0000-§}*~Ú^_Ê¾ü}9}ßÆy\u001c{ÛÆØO¹ï?Ùb\u001f\u001d ¹¿³SqËv:Ö7°Çü\u0011ñ¸p£!G\u0002\u001e²ú\"ýðÈA\u001c\u0005ú¤ïÓ%Ð\u0010½¢(\u0014¤G\fÇÆÌM0îIDD\u00140ÂC\u0017ñÏ}F\u0012æöB9%w©O¨7¤¡Ë\u0002\u0016&¢\\\"%°Í®¹\u0000ª\u0002ê\u0016îÊ-hÑÄí=é¸8£Ë&Ò[m¹ìVû¾£É\u0015ÊApüh\u0019þP°³96© H\u0006ïh\u001aöX\n(V×6I¾Y_ß5ÔãM¥0\"ø\u0007ÌYuv´ãÍï^àì´]¯Ì(¾í\u0005øõ\u000ff¥¨W&\u0005ç8R.\u0005àçF&ÅìZ­t\u0014JÙ+À=\u001a\u000fHÒÜ×Æ-LV\u0014\u001fÒ»$f\"\u001aÄ.\u0013YÞßY%<áì\u000fIn*Z¦\u001fÅ\u0014¬í®ÍðßÕ\u0001,õ´¥L\tcß\u001aÏ\u0005³° \u000f\"\u001f\u0013Ío\u0003Ê¨×ÖÖªÑX¯\u001bQi\u0018ÕZÝ¬ÞYÙ0j¶\\ËGOá«RQ·iBuR'¥\"¶úÐ\u001fíü\u0001a´è\u0007XËL_æöÉjRÓª¡ÏÐ¤wG}v5¶:¹6ÓMø'#½ôLN)7í\u0007Ä'Áê\u0019q£ ÂA7æî¤\u001cà±~$xÂ2(.?¸'ÊÄ\ti\nJ`$:ì!øÄ§Å``Ñã}\f\u0015Åq¹OY¢\u0016Ý\u0014 Ê\u0014 Î\u0002¢Ì\u0005¤x3ËÛóç¨ÊÌÙÑ?<³*y(s\u0001¹°\u0014\tÈ9¤¼1\u0001äïW\u001f\u0010³a¯ÚFÃÊ\u0001©Ý¹z@*\u0017\u0007dp\u0002HLcvI\"V+ïf1<\u001aÐC&¯\u001cñ¤7KÈ\u000b!P§ øk\u0016\u0002õÚ!PçA ^;\u00047&\u0010Ü²^y\bVÖ\r»¶a¦\u0010Xk¶Q7+¶ÝlTk)\u0004þ\u0015@°b\\£\u0013\nØQ{v9\u000e*Æÿæ@Õ «°ß\nêÜ\n\u001bç`ºhN{}òÞò)¯¬´´¬´^ËKë1:ÎTùÕixtÅ\\Ãg/OÃÇgix=×ðé)\r×~ðhó\u000e\u001eíÚ\u000f¥ÉÁs;?x$*ßÂ\u0003×¥\u0002q£>þDôòÓz^Ê þ2È{$¾\u00106ÕË]\u001fÿ\u0002PK\u0007\bH)tÇ\u0003\u0000\u0000Á\r\u0000\u0000PK\u0003\u0004\u0014\u0000\b\u0000\b\u00007¶|Y\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000é\u0000\u0000\u0000+\u0000 \u0000__MACOSX/._Catch - 6331-TNV - 12101-FDK.esmUT\r\u0000\u0007{åHg¬Zg±Zgux\u000b\u0000\u0001\u0004õ\u0001\u0000\u0000\u0004\u0014\u0000\u0000\u0000c`\u0015cg`b`ðMLVð\u000fVP\u0002\u0018\u0003'\u0010\u001b\u0001ñv \u0006ñ_2\u0010\u0005\u001cCB L\u001d@l¦\t*ÎÍÀ «XPªWP_\nRs\u0018ÕPä\u000bK\u0013\u0012óJ2óR\u0019\u0018\u0019\u0018Z\u001b³rL*Ô70°0²6375OJ10µöKÌM©02ðMÌKÏI-\u00021­\u0019\u0000PK\u0007\b}dBÜ\u0000\u0000\u0000é\u0000\u0000\u0000PK\u0001\u0002\u0014\u0003\u0014\u0000\b\u0000\b\u00007¶|YH)tÇ\u0003\u0000\u0000Á\r\u0000\u0000 \u0000 \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000¤\u0000\u0000\u0000\u0000Catch - 6331-TNV - 12101-FDK.esmUT\r\u0000\u0007{åHg¬Zg0\rYgux\u000b\u0000\u0001\u0004õ\u0001\u0000\u0000\u0004\u0014\u0000\u0000\u0000PK\u0001\u0002\u0014\u0003\u0014\u0000\b\u0000\b\u00007¶|Y}dBÜ\u0000\u0000\u0000é\u0000\u0000\u0000+\u0000 \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000¤5\u0004\u0000\u0000__MACOSX/._Catch - 6331-TNV - 12101-FDK.esmUT\r\u0000\u0007{åHg¬Zg±Zgux\u000b\u0000\u0001\u0004õ\u0001\u0000\u0000\u0004\u0014\u0000\u0000\u0000PK\u0005\u0006\u0000\u0000\u0000\u0000\u0002\u0000\u0002\u0000ç\u0000\u0000\u0000<\u0005\u0000\u0000\u0000\u0000\r\n------WebKitFormBoundaryRE4grjegJfiWxdTE--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "omit"
//   });

// MARK: Manage files - Add a new file - Save File

// game_id: 4187
// name: Catch - 6331-TNV - 12101-FDK
// file-version: 0.1.0
// update-version: 1
// category: 1
// brief-overview:
// set_as_main_nmm: 1
// requirements_pop_up: 1
// file_uuid: 22e690eb-5779-43f3-8c5b-a87683e734cb
// file_size: 1593
// mod_id: 12701
// id: 12701
// action: add
// uploaded_file: 1593-6500e0713d917483d0a6d9f9ccc1f52f
// original_file: Catch - 6331-TNV - 12101-FDK.esm.zip

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?AddFile", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryqbSObrMXidpqcxJv",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=files&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nCatch - 6331-TNV - 12101-FDK\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"file-version\"\r\n\r\n0.1.0\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"update-version\"\r\n\r\n1\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"category\"\r\n\r\n1\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"brief-overview\"\r\n\r\n\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"set_as_main_nmm\"\r\n\r\n1\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"requirements_pop_up\"\r\n\r\n1\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"file_uuid\"\r\n\r\n22e690eb-5779-43f3-8c5b-a87683e734cb\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"file_size\"\r\n\r\n1593\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"mod_id\"\r\n\r\n12701\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n12701\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nadd\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"uploaded_file\"\r\n\r\n1593-6500e0713d917483d0a6d9f9ccc1f52f\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv\r\nContent-Disposition: form-data; name=\"original_file\"\r\n\r\nCatch - 6331-TNV - 12101-FDK.esm.zip\r\n------WebKitFormBoundaryqbSObrMXidpqcxJv--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });

// MARK: Manage files - Add a new file - Update

// game_id: 4187
// name: Catch - 6331-TNV - 12101-FDK
// file-version: 0.1.1
// category: 1
// new-existing: 1
// old_file_id: 48271
// brief-overview:
// set_as_main_nmm: 1
// requirements_pop_up: 1
// file_uuid: bd29b909-96bf-478f-a9d6-f96ca0a7617b
// file_size: 1593
// mod_id: 12701
// id: 12701
// action: add
// uploaded_file: 1593-6500e0713d917483d0a6d9f9ccc1f52f
// original_file: Catch - 6331-TNV - 12101-FDK.esm.zip

// fetch("https://www.nexusmods.com/Core/Libs/Common/Managers/Mods?AddFile", {
// 	"headers": {
// 	  "accept": "*/*",
// 	  "accept-language": "de-AT,de;q=0.9,en;q=0.8,en-US;q=0.7",
// 	  "cache-control": "no-cache",
// 	  "content-type": "multipart/form-data; boundary=----WebKitFormBoundary6dYHmTfpIBowOmJ2",
// 	  "pragma": "no-cache",
// 	  "priority": "u=1, i",
// 	  "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
// 	  "sec-ch-ua-mobile": "?0",
// 	  "sec-ch-ua-platform": "\"macOS\"",
// 	  "sec-fetch-dest": "empty",
// 	  "sec-fetch-mode": "cors",
// 	  "sec-fetch-site": "same-origin",
// 	  "x-requested-with": "XMLHttpRequest"
// 	},
// 	"referrer": "https://www.nexusmods.com/starfield/mods/edit/?step=files&id=12701",
// 	"referrerPolicy": "strict-origin-when-cross-origin",
// 	"body": "------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"game_id\"\r\n\r\n4187\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nCatch - 6331-TNV - 12101-FDK\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"file-version\"\r\n\r\n0.1.1\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"category\"\r\n\r\n1\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"new-existing\"\r\n\r\n1\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"old_file_id\"\r\n\r\n48271\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"brief-overview\"\r\n\r\n\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"set_as_main_nmm\"\r\n\r\n1\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"requirements_pop_up\"\r\n\r\n1\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"file_uuid\"\r\n\r\nbd29b909-96bf-478f-a9d6-f96ca0a7617b\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"file_size\"\r\n\r\n1593\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"mod_id\"\r\n\r\n12701\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"id\"\r\n\r\n12701\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\nadd\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"uploaded_file\"\r\n\r\n1593-6500e0713d917483d0a6d9f9ccc1f52f\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2\r\nContent-Disposition: form-data; name=\"original_file\"\r\n\r\nCatch - 6331-TNV - 12101-FDK.esm.zip\r\n------WebKitFormBoundary6dYHmTfpIBowOmJ2--\r\n",
// 	"method": "POST",
// 	"mode": "cors",
// 	"credentials": "include"
//   });
