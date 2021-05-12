function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

const ASX_CODES = [{
	"code": "14D",
	"status": "ADJUST_ON",
	"title": "1414 Degrees Ltd"
}, {
	"code": "1AD",
	"status": "ADJUST_ON",
	"title": "Adalta Ltd"
}, {
	"code": "1AG",
	"status": "ADJUST_ON",
	"title": "Alterra Ltd"
}, {
	"code": "1ST",
	"status": "ADJUST_ON",
	"title": "1ST Group Ltd"
}, {
	"code": "2BE",
	"status": "SUSPEND",
	"title": "Tubi Ltd"
}, {
	"code": "360",
	"status": "ADJUST_ON",
	"title": "LIFE360 Inc"
}, {
	"code": "3DA",
	"status": "ADJUST_ON",
	"title": "Amaero International Ltd"
}, {
	"code": "3DP",
	"status": "ADJUST_ON",
	"title": "Pointerra Ltd"
}, {
	"code": "3MF",
	"status": "ADJUST_ON",
	"title": "3D Metalforge Ltd"
}, {
	"code": "3PL",
	"status": "ADJUST_ON",
	"title": "3P Learning Ltd"
}, {
	"code": "4CE",
	"status": "ADJUST_ON",
	"title": "Force Commodities Ltd"
}, {
	"code": "4DS",
	"status": "ADJUST_ON",
	"title": "4DS Memory Ltd"
}, {
	"code": "4DX",
	"status": "ADJUST_ON",
	"title": "4DMEDICAL Ltd"
}, {
	"code": "5GG",
	"status": "ADJUST_ON",
	"title": "Pentanet Ltd"
}, {
	"code": "5GN",
	"status": "ADJUST_ON",
	"title": "5G Networks Ltd"
}, {
	"code": "88E",
	"status": "ADJUST_ON",
	"title": "88 Energy Ltd"
}, {
	"code": "8CO",
	"status": "ADJUST_ON",
	"title": "8COMMON Ltd"
}, {
	"code": "8EC",
	"status": "SUSPEND",
	"title": "8IP Emerging Companies Ltd"
}, {
	"code": "8IH",
	"status": "ADJUST_ON",
	"title": "8I Holdings Ltd"
}, {
	"code": "8VI",
	"status": "ADJUST_ON",
	"title": "8VI Holdings Ltd"
}, {
	"code": "92E",
	"status": "ADJUST_ON",
	"title": "92 Energy Ltd"
}, {
	"code": "9SP",
	"status": "ADJUST_ON",
	"title": "9 Spokes International Ltd"
}, {
	"code": "A1G",
	"status": "ADJUST_ON",
	"title": "African Gold Ltd"
}, {
	"code": "A1M",
	"status": "ADJUST_ON",
	"title": "Aic Mines Ltd"
}, {
	"code": "A200",
	"status": "ADJUST_ON",
	"title": "Betashares Australia 200 ETF"
}, {
	"code": "A2B",
	"status": "ADJUST_ON",
	"title": "A2B Australia Ltd"
}, {
	"code": "A2M",
	"status": "ADJUST_ON",
	"title": "The a2 Milk Company Ltd"
}, {
	"code": "A3D",
	"status": "ADJUST_ON",
	"title": "Aurora Labs Ltd"
}, {
	"code": "A4N",
	"status": "ADJUST_ON",
	"title": "Alpha Hpa Ltd"
}, {
	"code": "AAA",
	"status": "ADJUST_ON",
	"title": "Betashares Australian High Interest Cash ETF"
}, {
	"code": "AAC",
	"status": "ADJUST_ON",
	"title": "Australian Agricultural Company Ltd"
}, {
	"code": "AAJ",
	"status": "ADJUST_ON",
	"title": "Aruma Resources Ltd"
}, {
	"code": "AAP",
	"status": "ADJUST_ON",
	"title": "Australian Agricultural Projects Ltd"
}, {
	"code": "AAR",
	"status": "ADJUST_ON",
	"title": "Anglo Australian Resources NL"
}, {
	"code": "AASF",
	"status": "ADJUST_ON",
	"title": "Airlie Australian Share Fund (Managed Fund)"
}, {
	"code": "AAU",
	"status": "ADJUST_ON",
	"title": "Antilles Gold Ltd"
}, {
	"code": "AAURB",
	"status": "ADJUST_ON",
	"title": "Antilles Gold Ltd"
}, {
	"code": "ABA",
	"status": "ADJUST_ON",
	"title": "Auswide Bank Ltd"
}, {
	"code": "ABB",
	"status": "ADJUST_ON",
	"title": "Aussie Broadband Ltd"
}, {
	"code": "ABC",
	"status": "ADJUST_ON",
	"title": "Adbri Ltd"
}, {
	"code": "ABL",
	"status": "SUSPEND",
	"title": "Abilene Oil and Gas Ltd"
}, {
	"code": "ABP",
	"status": "ADJUST_ON",
	"title": "Abacus Property Group"
}, {
	"code": "ABR",
	"status": "ADJUST_ON",
	"title": "American Pacific Borates Ltd"
}, {
	"code": "ABV",
	"status": "ADJUST_ON",
	"title": "Advanced Braking Technology Ltd"
}, {
	"code": "ABX",
	"status": "ADJUST_ON",
	"title": "Australian Bauxite Ltd"
}, {
	"code": "ABY",
	"status": "ADJUST_ON",
	"title": "Adore Beauty Group Ltd"
}, {
	"code": "AC8",
	"status": "ADJUST_ON",
	"title": "Auscann Group Holdings Ltd"
}, {
	"code": "ACB",
	"status": "ADJUST_ON",
	"title": "A-Cap Energy Ltd"
}, {
	"code": "ACDC",
	"status": "ADJUST_ON",
	"title": "ETFs Battery Tech & Lithium ETF"
}, {
	"code": "ACF",
	"status": "ADJUST_ON",
	"title": "Acrow Formwork and Construction Services Ltd"
}, {
	"code": "ACP",
	"status": "ADJUST_ON",
	"title": "Audalia Resources Ltd"
}, {
	"code": "ACQ",
	"status": "ADJUST_ON",
	"title": "Acorn Capital Investment Fund Ltd"
}, {
	"code": "ACR",
	"status": "ADJUST_ON",
	"title": "ACRUX Ltd"
}, {
	"code": "ACS",
	"status": "ADJUST_ON",
	"title": "Accent Resources NL"
}, {
	"code": "ACU",
	"status": "ADJUST_ON",
	"title": "Acumentis Group Ltd"
}, {
	"code": "ACW",
	"status": "ADJUST_ON",
	"title": "Actinogen Medical Ltd"
}, {
	"code": "AD1",
	"status": "ADJUST_ON",
	"title": "AD1 Holdings Ltd"
}, {
	"code": "AD8",
	"status": "ADJUST_ON",
	"title": "Audinate Group Ltd"
}, {
	"code": "ADA",
	"status": "ADJUST_ON",
	"title": "Adacel Technologies Ltd"
}, {
	"code": "ADD",
	"status": "ADJUST_ON",
	"title": "Adavale Resources Ltd"
}, {
	"code": "ADEF",
	"status": "ADJUST_ON",
	"title": "Apostle Dundas Glob Equity Class D (Managed Fund)"
}, {
	"code": "ADH",
	"status": "ADJUST_ON",
	"title": "Adairs Ltd"
}, {
	"code": "ADI",
	"status": "ADJUST_ON",
	"title": "Apn Industria REIT"
}, {
	"code": "ADN",
	"status": "ADJUST_ON",
	"title": "Andromeda Metals Ltd"
}, {
	"code": "ADO",
	"status": "ADJUST_ON",
	"title": "Anteotech Ltd"
}, {
	"code": "ADR",
	"status": "ADJUST_ON",
	"title": "Adherium Ltd"
}, {
	"code": "ADS",
	"status": "ADJUST_ON",
	"title": "Adslot Ltd"
}, {
	"code": "ADT",
	"status": "ADJUST_ON",
	"title": "Adriatic Metals Plc"
}, {
	"code": "ADV",
	"status": "ADJUST_ON",
	"title": "Ardiden Ltd"
}, {
	"code": "ADX",
	"status": "ADJUST_ON",
	"title": "ADX Energy Ltd"
}, {
	"code": "ADY",
	"status": "ADJUST_ON",
	"title": "Admiralty Resources NL"
}, {
	"code": "AEE",
	"status": "SUSPEND",
	"title": "Aura Energy Ltd"
}, {
	"code": "AEENA",
	"status": "SUSPEND",
	"title": "Aura Energy Ltd"
}, {
	"code": "AEF",
	"status": "ADJUST_ON",
	"title": "Australian Ethical Investment Ltd"
}, {
	"code": "AEG",
	"status": "ADJUST_ON",
	"title": "Absolute Equity Performance Fund Ltd"
}, {
	"code": "AEI",
	"status": "ADJUST_ON",
	"title": "Aeris Environmental Ltd"
}, {
	"code": "AER",
	"status": "ADJUST_ON",
	"title": "Aeeris Ltd"
}, {
	"code": "AEV",
	"status": "ADJUST_ON",
	"title": "Avenira Ltd"
}, {
	"code": "AFA",
	"status": "ADJUST_ON",
	"title": "Asf Group Ltd"
}, {
	"code": "AFG",
	"status": "ADJUST_ON",
	"title": "Australian Finance Group Ltd"
}, {
	"code": "AFI",
	"status": "ADJUST_ON",
	"title": "Australian Foundation Investment Company Ltd"
}, {
	"code": "AFL",
	"status": "ADJUST_ON",
	"title": "Af Legal Group Ltd"
}, {
	"code": "AFP",
	"status": "ADJUST_ON",
	"title": "Aft Pharmaceuticals Ltd"
}, {
	"code": "AFR",
	"status": "ADJUST_ON",
	"title": "African Energy Resources Ltd"
}, {
	"code": "AFW",
	"status": "ADJUST_ON",
	"title": "Applyflow Ltd"
}, {
	"code": "AGC",
	"status": "ADJUST_ON",
	"title": "Australian Gold and Copper Ltd"
}, {
	"code": "AGD",
	"status": "ADJUST_ON",
	"title": "Austral Gold Ltd"
}, {
	"code": "AGE",
	"status": "ADJUST_ON",
	"title": "Alligator Energy Ltd"
}, {
	"code": "AGG",
	"status": "ADJUST_ON",
	"title": "Anglogold Ashanti Ltd"
}, {
	"code": "AGH",
	"status": "ADJUST_ON",
	"title": "Althea Group Holdings Ltd"
}, {
	"code": "AGI",
	"status": "ADJUST_ON",
	"title": "Ainsworth Game Technology Ltd"
}, {
	"code": "AGJ",
	"status": "SUSPEND",
	"title": "Agricultural Land Trust"
}, {
	"code": "AGL",
	"status": "ADJUST_ON",
	"title": "AGL Energy Ltd"
}, {
	"code": "AGR",
	"status": "ADJUST_ON",
	"title": "Aguia Resources Ltd"
}, {
	"code": "AGS",
	"status": "ADJUST_ON",
	"title": "Alliance Resources Ltd"
}, {
	"code": "AGVT",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Government Bond ETF"
}, {
	"code": "AGX1",
	"status": "ADJUST_ON",
	"title": "Antipodes Global Shares (Quoted Managed Fund)"
}, {
	"code": "AGY",
	"status": "ADJUST_ON",
	"title": "Argosy Minerals Ltd"
}, {
	"code": "AHC",
	"status": "ADJUST_ON",
	"title": "Austco Healthcare Ltd"
}, {
	"code": "AHF",
	"status": "ADJUST_ON",
	"title": "Australian Dairy Nutritionals Group"
}, {
	"code": "AHI",
	"status": "ADJUST_ON",
	"title": "Advanced Human Imaging Ltd"
}, {
	"code": "AHK",
	"status": "SUSPEND",
	"title": "Ark Mines Ltd"
}, {
	"code": "AHN",
	"status": "SUSPEND",
	"title": "Athena Resources Ltd"
}, {
	"code": "AHQDB",
	"status": "ADJUST_ON",
	"title": "Allegiance Coal Ltd"
}, {
	"code": "AHX",
	"status": "ADJUST_ON",
	"title": "Apiam Animal Health Ltd"
}, {
	"code": "AHY",
	"status": "ADJUST_ON",
	"title": "Asaleo Care Ltd"
}, {
	"code": "AIA",
	"status": "ADJUST_ON",
	"title": "Auckland International Airport Ltd"
}, {
	"code": "AIB",
	"status": "ADJUST_ON",
	"title": "Aurora Global Income Trust"
}, {
	"code": "AIM",
	"status": "ADJUST_ON",
	"title": "Access Innovation Holdings Ltd"
}, {
	"code": "AIQ",
	"status": "ADJUST_ON",
	"title": "Alternative Investment Trust"
}, {
	"code": "AIR",
	"status": "ADJUST_ON",
	"title": "Astivita Ltd"
}, {
	"code": "AIS",
	"status": "ADJUST_ON",
	"title": "Aeris Resources Ltd"
}, {
	"code": "AIV",
	"status": "ADJUST_ON",
	"title": "Activex Ltd"
}, {
	"code": "AIY",
	"status": "SUSPEND",
	"title": "Authorised Investment Fund Ltd"
}, {
	"code": "AIZ",
	"status": "ADJUST_ON",
	"title": "Air New Zealand Ltd"
}, {
	"code": "AJJ",
	"status": "ADJUST_ON",
	"title": "Asian American Medical Group Ltd"
}, {
	"code": "AJL",
	"status": "ADJUST_ON",
	"title": "AJ Lucas Group Ltd"
}, {
	"code": "AJM",
	"status": "SUSPEND",
	"title": "Altura Mining Ltd"
}, {
	"code": "AJQ",
	"status": "ADJUST_ON",
	"title": "Armour Energy Ltd"
}, {
	"code": "AJX",
	"status": "ADJUST_ON",
	"title": "Alexium International Group Ltd"
}, {
	"code": "AJY",
	"status": "ADJUST_ON",
	"title": "Asaplus Resources Ltd"
}, {
	"code": "AKG",
	"status": "ADJUST_ON",
	"title": "Academies Australasia Group Ltd"
}, {
	"code": "AKL",
	"status": "ADJUST_ON",
	"title": "Auckland Real Estate Trust"
}, {
	"code": "AKM",
	"status": "ADJUST_ON",
	"title": "Aspire Mining Ltd"
}, {
	"code": "AKN",
	"status": "SUSPEND",
	"title": "Auking Mining Ltd"
}, {
	"code": "AKO",
	"status": "ADJUST_ON",
	"title": "Akora Resources Ltd"
}, {
	"code": "AKP",
	"status": "ADJUST_ON",
	"title": "Audio Pixels Holdings Ltd"
}, {
	"code": "AL3",
	"status": "ADJUST_ON",
	"title": "AML3D Ltd"
}, {
	"code": "AL8",
	"status": "ADJUST_ON",
	"title": "Alderan Resources Ltd"
}, {
	"code": "ALB",
	"status": "ADJUST_ON",
	"title": "Albion Resources Ltd"
}, {
	"code": "ALC",
	"status": "ADJUST_ON",
	"title": "Alcidion Group Ltd"
}, {
	"code": "ALD",
	"status": "ADJUST_ON",
	"title": "Ampol Ltd"
}, {
	"code": "ALG",
	"status": "ADJUST_ON",
	"title": "Ardent Leisure Group Ltd"
}, {
	"code": "ALI",
	"status": "ADJUST_ON",
	"title": "Argo Global Listed Infrastructure Ltd"
}, {
	"code": "ALK",
	"status": "ADJUST_ON",
	"title": "Alkane Resources Ltd"
}, {
	"code": "ALL",
	"status": "ADJUST_ON",
	"title": "Aristocrat Leisure Ltd"
}, {
	"code": "ALQ",
	"status": "ADJUST_ON",
	"title": "Als Ltd"
}, {
	"code": "ALT",
	"status": "ADJUST_ON",
	"title": "Analytica Ltd"
}, {
	"code": "ALU",
	"status": "ADJUST_ON",
	"title": "Altium Ltd"
}, {
	"code": "ALX",
	"status": "ADJUST_ON",
	"title": "Atlas Arteria"
}, {
	"code": "ALY",
	"status": "ADJUST_ON",
	"title": "Alchemy Resources Ltd"
}, {
	"code": "AMA",
	"status": "ADJUST_ON",
	"title": "AMA Group Ltd"
}, {
	"code": "AMC",
	"status": "ADJUST_ON",
	"title": "Amcor Plc"
}, {
	"code": "AMD",
	"status": "ADJUST_ON",
	"title": "Arrow Minerals Ltd"
}, {
	"code": "AME",
	"status": "ADJUST_ON",
	"title": "Alto Metals Ltd"
}, {
	"code": "AMG",
	"status": "ADJUST_ON",
	"title": "Ausmex Mining Group Ltd"
}, {
	"code": "AMH",
	"status": "ADJUST_ON",
	"title": "Amcil Ltd"
}, {
	"code": "AMI",
	"status": "ADJUST_ON",
	"title": "Aurelia Metals Ltd"
}, {
	"code": "AML",
	"status": "ADJUST_ON",
	"title": "Aeon Metals Ltd"
}, {
	"code": "AMN",
	"status": "ADJUST_ON",
	"title": "Agrimin Ltd"
}, {
	"code": "AMO",
	"status": "ADJUST_ON",
	"title": "Ambertech Ltd"
}, {
	"code": "AMP",
	"status": "ADJUST_ON",
	"title": "AMP Ltd"
}, {
	"code": "AMS",
	"status": "ADJUST_ON",
	"title": "Atomos Ltd"
}, {
	"code": "AMT",
	"status": "ADJUST_ON",
	"title": "Allegra Orthopaedics Ltd"
}, {
	"code": "AMX",
	"status": "ADJUST_ON",
	"title": "Aerometrex Ltd"
}, {
	"code": "ANA",
	"status": "ADJUST_ON",
	"title": "Ansila Energy NL"
}, {
	"code": "AND",
	"status": "ADJUST_ON",
	"title": "Ansarada Group Ltd"
}, {
	"code": "ANG",
	"status": "ADJUST_ON",
	"title": "Austin Engineering Ltd"
}, {
	"code": "ANL",
	"status": "ADJUST_ON",
	"title": "Amani Gold Ltd"
}, {
	"code": "ANN",
	"status": "ADJUST_ON",
	"title": "Ansell Ltd"
}, {
	"code": "ANO",
	"status": "ADJUST_ON",
	"title": "Advance Nanotek Ltd"
}, {
	"code": "ANP",
	"status": "ADJUST_ON",
	"title": "Antisense Therapeutics Ltd"
}, {
	"code": "ANR",
	"status": "ADJUST_ON",
	"title": "Anatara Lifesciences Ltd"
}, {
	"code": "ANW",
	"status": "ADJUST_ON",
	"title": "Aus Tin Mining Ltd"
}, {
	"code": "ANX",
	"status": "ADJUST_ON",
	"title": "ANAX Metals Ltd"
}, {
	"code": "ANZ",
	"status": "ADJUST_ON",
	"title": "Australia and New Zealand Banking Group Ltd"
}, {
	"code": "AO1",
	"status": "ADJUST_ON",
	"title": "Assetowl Ltd"
}, {
	"code": "AOA",
	"status": "ADJUST_ON",
	"title": "Ausmon Resources Ltd"
}, {
	"code": "AOF",
	"status": "ADJUST_ON",
	"title": "Australian Unity Office Fund"
}, {
	"code": "AON",
	"status": "ADJUST_ON",
	"title": "Apollo Minerals Ltd"
}, {
	"code": "AOP",
	"status": "ADJUST_ON",
	"title": "Apollo Consolidated Ltd"
}, {
	"code": "AOU",
	"status": "ADJUST_ON",
	"title": "Auroch Minerals Ltd"
}, {
	"code": "APA",
	"status": "ADJUST_ON",
	"title": "APA Group"
}, {
	"code": "APC",
	"status": "ADJUST_ON",
	"title": "Australian Potash Ltd"
}, {
	"code": "APD",
	"status": "ADJUST_ON",
	"title": "Apn Property Group"
}, {
	"code": "APE",
	"status": "ADJUST_ON",
	"title": "Eagers Automotive Ltd"
}, {
	"code": "APG",
	"status": "ADJUST_ON",
	"title": "Austpac Resources NL"
}, {
	"code": "APH",
	"status": "ADJUST_ON",
	"title": "Australian Primary Hemp Ltd"
}, {
	"code": "API",
	"status": "ADJUST_ON",
	"title": "Australian Pharmaceutical Industries Ltd"
}, {
	"code": "APL",
	"status": "ADJUST_ON",
	"title": "Antipodes Global Investment Company Ltd"
}, {
	"code": "APT",
	"status": "ADJUST_ON",
	"title": "Afterpay Ltd"
}, {
	"code": "APV",
	"status": "ADJUST_ON",
	"title": "Appsvillage Australia Ltd"
}, {
	"code": "APW",
	"status": "ADJUST_ON",
	"title": "Aims Property Securities Fund"
}, {
	"code": "APX",
	"status": "ADJUST_ON",
	"title": "Appen Ltd"
}, {
	"code": "APZ",
	"status": "ADJUST_ON",
	"title": "Aspen Group"
}, {
	"code": "AQC",
	"status": "ADJUST_ON",
	"title": "Australian Pacific Coal Ltd"
}, {
	"code": "AQD",
	"status": "ADJUST_ON",
	"title": "Ausquest Ltd"
}, {
	"code": "AQI",
	"status": "ADJUST_ON",
	"title": "Alicanto Minerals Ltd"
}, {
	"code": "AQR",
	"status": "ADJUST_ON",
	"title": "Apn Convenience Retail REIT"
}, {
	"code": "AQS",
	"status": "ADJUST_ON",
	"title": "AQUIS Entertainment Ltd"
}, {
	"code": "AQX",
	"status": "ADJUST_ON",
	"title": "Alice QUEEN Ltd"
}, {
	"code": "AQZ",
	"status": "ADJUST_ON",
	"title": "Alliance Aviation Services Ltd"
}, {
	"code": "AR9",
	"status": "ADJUST_ON",
	"title": "Archtis Ltd"
}, {
	"code": "ARA",
	"status": "ADJUST_ON",
	"title": "Ariadne Australia Ltd"
}, {
	"code": "ARB",
	"status": "ADJUST_ON",
	"title": "ARB Corporation Ltd"
}, {
	"code": "ARC",
	"status": "ADJUST_ON",
	"title": "Australian Rural Capital Ltd"
}, {
	"code": "ARD",
	"status": "ADJUST_ON",
	"title": "Argent Minerals Ltd"
}, {
	"code": "ARE",
	"status": "ADJUST_ON",
	"title": "Argonaut Resources NL"
}, {
	"code": "ARF",
	"status": "ADJUST_ON",
	"title": "Arena REIT"
}, {
	"code": "ARG",
	"status": "ADJUST_ON",
	"title": "Argo Investments Ltd"
}, {
	"code": "ARL",
	"status": "ADJUST_ON",
	"title": "Ardea Resources Ltd"
}, {
	"code": "ARN",
	"status": "ADJUST_ON",
	"title": "Aldoro Resources Ltd"
}, {
	"code": "ARO",
	"status": "ADJUST_ON",
	"title": "Astro Resources NL"
}, {
	"code": "ARR",
	"status": "ADJUST_ON",
	"title": "American Rare EARTHS Ltd"
}, {
	"code": "ART",
	"status": "ADJUST_ON",
	"title": "Airtasker Ltd"
}, {
	"code": "ARU",
	"status": "ADJUST_ON",
	"title": "Arafura Resources Ltd"
}, {
	"code": "ARV",
	"status": "ADJUST_ON",
	"title": "Artemis Resources Ltd"
}, {
	"code": "ARX",
	"status": "ADJUST_ON",
	"title": "Aroa Biosurgery Ltd"
}, {
	"code": "AS1",
	"status": "ADJUST_ON",
	"title": "Angel Seafood Holdings Ltd"
}, {
	"code": "ASB",
	"status": "ADJUST_ON",
	"title": "Austal Ltd"
}, {
	"code": "ASG",
	"status": "ADJUST_ON",
	"title": "Autosports Group Ltd"
}, {
	"code": "ASH",
	"status": "ADJUST_ON",
	"title": "Ashley Services Group Ltd"
}, {
	"code": "ASIA",
	"status": "ADJUST_ON",
	"title": "Betashares Asia Technology Tigers ETF"
}, {
	"code": "ASM",
	"status": "ADJUST_ON",
	"title": "Australian Strategic Materials Ltd"
}, {
	"code": "ASN",
	"status": "ADJUST_ON",
	"title": "Anson Resources Ltd"
}, {
	"code": "ASO",
	"status": "ADJUST_ON",
	"title": "Aston Minerals Ltd"
}, {
	"code": "ASP",
	"status": "ADJUST_ON",
	"title": "Aspermont Ltd"
}, {
	"code": "ASQ",
	"status": "ADJUST_ON",
	"title": "Australian Silica Quartz Group Ltd"
}, {
	"code": "AST",
	"status": "ADJUST_ON",
	"title": "Ausnet Services Ltd"
}, {
	"code": "ASW",
	"status": "ADJUST_ON",
	"title": "Advanced Share Registry Ltd"
}, {
	"code": "ASX",
	"status": "ADJUST_ON",
	"title": "ASX Ltd"
}, {
	"code": "AT1",
	"status": "ADJUST_ON",
	"title": "Atomo Diagnostics Ltd"
}, {
	"code": "ATC",
	"status": "ADJUST_ON",
	"title": "Altech Chemicals Ltd"
}, {
	"code": "ATEC",
	"status": "ADJUST_ON",
	"title": "Betashares S&P\/ASX Australian Technology ETF"
}, {
	"code": "ATH",
	"status": "ADJUST_ON",
	"title": "Alterity Therapeutics Ltd"
}, {
	"code": "ATL",
	"status": "ADJUST_ON",
	"title": "Apollo Tourism & Leisure Ltd"
}, {
	"code": "ATM",
	"status": "SUSPEND",
	"title": "Aneka Tambang (Persero) TBK (PT)"
}, {
	"code": "ATP",
	"status": "ADJUST_ON",
	"title": "Atlas Pearls Ltd"
}, {
	"code": "ATR",
	"status": "ADJUST_ON",
	"title": "Astron Corporation Ltd"
}, {
	"code": "ATS",
	"status": "ADJUST_ON",
	"title": "Australis Oil & Gas Ltd"
}, {
	"code": "ATU",
	"status": "ADJUST_ON",
	"title": "Atrum Coal Ltd"
}, {
	"code": "ATX",
	"status": "ADJUST_ON",
	"title": "Amplia Therapeutics Ltd"
}, {
	"code": "AU1",
	"status": "ADJUST_ON",
	"title": "The Agency Group Australia Ltd"
}, {
	"code": "AUB",
	"status": "ADJUST_ON",
	"title": "AUB Group Ltd"
}, {
	"code": "AUC",
	"status": "ADJUST_ON",
	"title": "Ausgold Ltd"
}, {
	"code": "AUDS",
	"status": "ADJUST_ON",
	"title": "Betashares Strong Australian Dollar Fund (Hedge Fund)"
}, {
	"code": "AUH",
	"status": "ADJUST_ON",
	"title": "Austchina Holdings Ltd"
}, {
	"code": "AUI",
	"status": "ADJUST_ON",
	"title": "Australian United Investment Company Ltd"
}, {
	"code": "AUK",
	"status": "ADJUST_ON",
	"title": "Aumake Ltd"
}, {
	"code": "AUL",
	"status": "ADJUST_ON",
	"title": "Austar Gold Ltd"
}, {
	"code": "AUMF",
	"status": "ADJUST_ON",
	"title": "Ishares Edge MSCI Australia Multifactor ETF"
}, {
	"code": "AUN",
	"status": "ADJUST_ON",
	"title": "Aurumin Ltd"
}, {
	"code": "AUP",
	"status": "SUSPEND",
	"title": "Aurora Property Buy-Write Income Trust"
}, {
	"code": "AUQ",
	"status": "ADJUST_ON",
	"title": "Alara Resources Ltd"
}, {
	"code": "AUR",
	"status": "ADJUST_ON",
	"title": "Auris Minerals Ltd"
}, {
	"code": "AUST",
	"status": "ADJUST_ON",
	"title": "Betashares Managed Risk Australian Share Fund (Managed Fund)"
}, {
	"code": "AUT",
	"status": "ADJUST_ON",
	"title": "Auteco Minerals Ltd"
}, {
	"code": "AUZ",
	"status": "ADJUST_ON",
	"title": "Australian Mines Ltd"
}, {
	"code": "AV1",
	"status": "ADJUST_ON",
	"title": "Adveritas Ltd"
}, {
	"code": "AVA",
	"status": "ADJUST_ON",
	"title": "AVA Risk Group Ltd"
}, {
	"code": "AVC",
	"status": "ADJUST_ON",
	"title": "Auctus Investment Group Ltd"
}, {
	"code": "AVE",
	"status": "ADJUST_ON",
	"title": "Avecho Biotechnology Ltd"
}, {
	"code": "AVG",
	"status": "ADJUST_ON",
	"title": "Australian Vintage Ltd"
}, {
	"code": "AVH",
	"status": "ADJUST_ON",
	"title": "Avita Medical Inc"
}, {
	"code": "AVJ",
	"status": "ADJUST_ON",
	"title": "Avjennings Ltd"
}, {
	"code": "AVL",
	"status": "ADJUST_ON",
	"title": "Australian Vanadium Ltd"
}, {
	"code": "AVN",
	"status": "ADJUST_ON",
	"title": "Aventus Group"
}, {
	"code": "AVR",
	"status": "ADJUST_ON",
	"title": "Anteris Technologies Ltd"
}, {
	"code": "AVW",
	"status": "ADJUST_ON",
	"title": "Avira Resources Ltd"
}, {
	"code": "AVZ",
	"status": "ADJUST_ON",
	"title": "AVZ Minerals Ltd"
}, {
	"code": "AWC",
	"status": "ADJUST_ON",
	"title": "Alumina Ltd"
}, {
	"code": "AWJ",
	"status": "ADJUST_ON",
	"title": "Auric Mining Ltd"
}, {
	"code": "AWN",
	"status": "ADJUST_ON",
	"title": "AWN Holdings Ltd"
}, {
	"code": "AWV",
	"status": "ADJUST_ON",
	"title": "Anova Metals Ltd"
}, {
	"code": "AX1",
	"status": "ADJUST_ON",
	"title": "Accent Group Ltd"
}, {
	"code": "AX8",
	"status": "ADJUST_ON",
	"title": "Accelerate Resources Ltd"
}, {
	"code": "AXE",
	"status": "ADJUST_ON",
	"title": "Archer Materials Ltd"
}, {
	"code": "AXI",
	"status": "ADJUST_ON",
	"title": "Axiom Properties Ltd"
}, {
	"code": "AXT",
	"status": "SUSPEND",
	"title": "Argo Exploration Ltd"
}, {
	"code": "AYI",
	"status": "ADJUST_ON",
	"title": "A1 Investments & Resources Ltd"
}, {
	"code": "AYM",
	"status": "ADJUST_ON",
	"title": "Australia United Mining Ltd"
}, {
	"code": "AZI",
	"status": "ADJUST_ON",
	"title": "Alta ZINC Ltd"
}, {
	"code": "AZJ",
	"status": "ADJUST_ON",
	"title": "Aurizon Holdings Ltd"
}, {
	"code": "AZS",
	"status": "ADJUST_ON",
	"title": "AZURE Minerals Ltd"
}, {
	"code": "AZY",
	"status": "ADJUST_ON",
	"title": "Antipa Minerals Ltd"
}, {
	"code": "BAP",
	"status": "ADJUST_ON",
	"title": "Bapcor Ltd"
}, {
	"code": "BAR",
	"status": "ADJUST_ON",
	"title": "Barra Resources Ltd"
}, {
	"code": "BAS",
	"status": "ADJUST_ON",
	"title": "Bass Oil Ltd"
}, {
	"code": "BAT",
	"status": "ADJUST_ON",
	"title": "Battery Minerals Ltd"
}, {
	"code": "BBC",
	"status": "ADJUST_ON",
	"title": "BNK Banking Corporation Ltd"
}, {
	"code": "BBL",
	"status": "ADJUST_ON",
	"title": "Brisbane Broncos Ltd"
}, {
	"code": "BBN",
	"status": "ADJUST_ON",
	"title": "Baby Bunting Group Ltd"
}, {
	"code": "BBOZ",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Strong Bear (Hedge Fund)"
}, {
	"code": "BBUS",
	"status": "ADJUST_ON",
	"title": "Betashares US Equities Strong Bear Currency Hedged (HF)"
}, {
	"code": "BBX",
	"status": "ADJUST_ON",
	"title": "BBX Minerals Ltd"
}, {
	"code": "BC8",
	"status": "ADJUST_ON",
	"title": "Black Cat Syndicate Ltd"
}, {
	"code": "BCA",
	"status": "ADJUST_ON",
	"title": "Black Canyon Ltd"
}, {
	"code": "BCB",
	"status": "ADJUST_ON",
	"title": "Bowen Coking Coal Ltd"
}, {
	"code": "BCC",
	"status": "ADJUST_ON",
	"title": "Beam Communications Holdings Ltd"
}, {
	"code": "BCI",
	"status": "ADJUST_ON",
	"title": "BCI Minerals Ltd"
}, {
	"code": "BCK",
	"status": "ADJUST_ON",
	"title": "Brockman Mining Ltd"
}, {
	"code": "BCN",
	"status": "ADJUST_ON",
	"title": "Beacon Minerals Ltd"
}, {
	"code": "BCT",
	"status": "ADJUST_ON",
	"title": "Bluechiip Ltd"
}, {
	"code": "BD1",
	"status": "ADJUST_ON",
	"title": "BARD1 Life Sciences Ltd"
}, {
	"code": "BDA",
	"status": "ADJUST_ON",
	"title": "Bod Australia Ltd"
}, {
	"code": "BDC",
	"status": "ADJUST_ON",
	"title": "Bardoc Gold Ltd"
}, {
	"code": "BDG",
	"status": "ADJUST_ON",
	"title": "Black Dragon Gold Corp"
}, {
	"code": "BDM",
	"status": "ADJUST_ON",
	"title": "Burgundy Diamond Mines Ltd"
}, {
	"code": "BEAR",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Equities Bear (Hedge Fund)"
}, {
	"code": "BEE",
	"status": "ADJUST_ON",
	"title": "Broo Ltd"
}, {
	"code": "BEL",
	"status": "ADJUST_ON",
	"title": "Bentley Capital Ltd"
}, {
	"code": "BEM",
	"status": "ADJUST_ON",
	"title": "Blackearth Minerals NL"
}, {
	"code": "BEN",
	"status": "ADJUST_ON",
	"title": "Bendigo and Adelaide Bank Ltd"
}, {
	"code": "BET",
	"status": "ADJUST_ON",
	"title": "Betmakers Technology Group Ltd"
}, {
	"code": "BEX",
	"status": "ADJUST_ON",
	"title": "Bikeexchange Ltd"
}, {
	"code": "BFC",
	"status": "ADJUST_ON",
	"title": "Beston Global Food Company Ltd"
}, {
	"code": "BFG",
	"status": "ADJUST_ON",
	"title": "Bell Financial Group Ltd"
}, {
	"code": "BGA",
	"status": "ADJUST_ON",
	"title": "Bega Cheese Ltd"
}, {
	"code": "BGL",
	"status": "ADJUST_ON",
	"title": "Bellevue Gold Ltd"
}, {
	"code": "BGP",
	"status": "ADJUST_ON",
	"title": "Briscoe Group Australasia Ltd"
}, {
	"code": "BGT",
	"status": "ADJUST_ON",
	"title": "Bio-Gene Technology Ltd"
}, {
	"code": "BHD",
	"status": "ADJUST_ON",
	"title": "Benjamin Hornigold Ltd"
}, {
	"code": "BHL",
	"status": "SUSPEND",
	"title": "Boyuan Holdings Ltd"
}, {
	"code": "BHP",
	"status": "ADJUST_ON",
	"title": "BHP Group Ltd"
}, {
	"code": "BHYB",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Major Bank Hybrids INDEX ETF"
}, {
	"code": "BID",
	"status": "ADJUST_ON",
	"title": "Bill Identity Ltd"
}, {
	"code": "BILL",
	"status": "ADJUST_ON",
	"title": "Ishares Core Cash ETF"
}, {
	"code": "BIN",
	"status": "ADJUST_ON",
	"title": "Bingo Industries Ltd"
}, {
	"code": "BIQ",
	"status": "SUSPEND",
	"title": "Buildingiq, Inc"
}, {
	"code": "BIR",
	"status": "ADJUST_ON",
	"title": "BIR Financial Ltd"
}, {
	"code": "BIS",
	"status": "ADJUST_ON",
	"title": "Bisalloy Steel Group Ltd"
}, {
	"code": "BIT",
	"status": "ADJUST_ON",
	"title": "Biotron Ltd"
}, {
	"code": "BKG",
	"status": "ADJUST_ON",
	"title": "Booktopia Group Ltd"
}, {
	"code": "BKI",
	"status": "ADJUST_ON",
	"title": "BKI Investment Company Ltd"
}, {
	"code": "BKL",
	"status": "ADJUST_ON",
	"title": "Blackmores Ltd"
}, {
	"code": "BKT",
	"status": "ADJUST_ON",
	"title": "Black Rock Mining Ltd"
}, {
	"code": "BKW",
	"status": "ADJUST_ON",
	"title": "Brickworks Ltd"
}, {
	"code": "BKY",
	"status": "ADJUST_ON",
	"title": "Berkeley Energia Ltd"
}, {
	"code": "BLD",
	"status": "ADJUST_ON",
	"title": "Boral Ltd"
}, {
	"code": "BLG",
	"status": "ADJUST_ON",
	"title": "Bluglass Ltd"
}, {
	"code": "BLU",
	"status": "ADJUST_ON",
	"title": "Blue Energy Ltd"
}, {
	"code": "BLX",
	"status": "ADJUST_ON",
	"title": "Beacon Lighting Group Ltd"
}, {
	"code": "BLY",
	"status": "ADJUST_ON",
	"title": "Boart Longyear Ltd"
}, {
	"code": "BLZ",
	"status": "ADJUST_ON",
	"title": "BLAZE International Ltd"
}, {
	"code": "BMG",
	"status": "ADJUST_ON",
	"title": "BMG Resources Ltd"
}, {
	"code": "BMH",
	"status": "ADJUST_ON",
	"title": "Baumart Holdings Ltd"
}, {
	"code": "BML",
	"status": "ADJUST_ON",
	"title": "Boab Metals Ltd"
}, {
	"code": "BMN",
	"status": "ADJUST_ON",
	"title": "Bannerman Resources Ltd"
}, {
	"code": "BMO",
	"status": "ADJUST_ON",
	"title": "Bastion Minerals Ltd"
}, {
	"code": "BNDS",
	"status": "ADJUST_ON",
	"title": "Betashares Legg Mason Australian Bond Fund (Managed Fund)"
}, {
	"code": "BNKS",
	"status": "ADJUST_ON",
	"title": "Betashares Global Banks ETF - Currency Hedged"
}, {
	"code": "BNL",
	"status": "ADJUST_ON",
	"title": "Blue Star Helium Ltd"
}, {
	"code": "BNO",
	"status": "ADJUST_ON",
	"title": "Bionomics Ltd"
}, {
	"code": "BNR",
	"status": "ADJUST_ON",
	"title": "Bulletin Resources Ltd"
}, {
	"code": "BNZ",
	"status": "ADJUST_ON",
	"title": "BENZ Mining Corp"
}, {
	"code": "BOA",
	"status": "ADJUST_ON",
	"title": "Boadicea Resources Ltd"
}, {
	"code": "BOC",
	"status": "ADJUST_ON",
	"title": "Bougainville Copper Ltd"
}, {
	"code": "BOE",
	"status": "ADJUST_ON",
	"title": "Boss Energy Ltd"
}, {
	"code": "BOL",
	"status": "ADJUST_ON",
	"title": "Boom Logistics Ltd"
}, {
	"code": "BOND",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX Australian Bond Fund"
}, {
	"code": "BOQ",
	"status": "ADJUST_ON",
	"title": "Bank of Queensland Ltd"
}, {
	"code": "BOT",
	"status": "ADJUST_ON",
	"title": "Botanix Pharmaceuticals Ltd"
}, {
	"code": "BPH",
	"status": "ADJUST_ON",
	"title": "BPH Energy Ltd"
}, {
	"code": "BPM",
	"status": "ADJUST_ON",
	"title": "BPM Minerals Ltd"
}, {
	"code": "BPP",
	"status": "ADJUST_ON",
	"title": "Babylon Pump & Power Ltd"
}, {
	"code": "BPT",
	"status": "ADJUST_ON",
	"title": "Beach Energy Ltd"
}, {
	"code": "BRB",
	"status": "ADJUST_ON",
	"title": "Breaker Resources NL"
}, {
	"code": "BRG",
	"status": "ADJUST_ON",
	"title": "Breville Group Ltd"
}, {
	"code": "BRI",
	"status": "ADJUST_ON",
	"title": "Big River Industries Ltd"
}, {
	"code": "BRK",
	"status": "ADJUST_ON",
	"title": "Brookside Energy Ltd"
}, {
	"code": "BRL",
	"status": "ADJUST_ON",
	"title": "Bathurst Resources Ltd"
}, {
	"code": "BRN",
	"status": "ADJUST_ON",
	"title": "Brainchip Holdings Ltd"
}, {
	"code": "BRU",
	"status": "ADJUST_ON",
	"title": "Buru Energy Ltd"
}, {
	"code": "BRV",
	"status": "ADJUST_ON",
	"title": "Big River Gold Ltd"
}, {
	"code": "BSA",
	"status": "ADJUST_ON",
	"title": "BSA Ltd"
}, {
	"code": "BSE",
	"status": "ADJUST_ON",
	"title": "Base Resources Ltd"
}, {
	"code": "BSL",
	"status": "ADJUST_ON",
	"title": "Bluescope Steel Ltd"
}, {
	"code": "BSM",
	"status": "ADJUST_ON",
	"title": "Bass Metals Ltd"
}, {
	"code": "BSR",
	"status": "SUSPEND",
	"title": "Bassari Resources Ltd"
}, {
	"code": "BSX",
	"status": "ADJUST_ON",
	"title": "Blackstone Minerals Ltd"
}, {
	"code": "BTC",
	"status": "ADJUST_ON",
	"title": "BTC Health Ltd"
}, {
	"code": "BTH",
	"status": "ADJUST_ON",
	"title": "Bigtincan Holdings Ltd"
}, {
	"code": "BTI",
	"status": "ADJUST_ON",
	"title": "Bailador Technology Investments Ltd"
}, {
	"code": "BTR",
	"status": "ADJUST_ON",
	"title": "Brightstar Resources Ltd"
}, {
	"code": "BUB",
	"status": "ADJUST_ON",
	"title": "Bubs Australia Ltd"
}, {
	"code": "BUD",
	"status": "SUSPEND",
	"title": "Buddy Technologies Ltd"
}, {
	"code": "BUX",
	"status": "ADJUST_ON",
	"title": "Buxton Resources Ltd"
}, {
	"code": "BUY",
	"status": "ADJUST_ON",
	"title": "Bounty Oil & Gas NL"
}, {
	"code": "BVS",
	"status": "ADJUST_ON",
	"title": "Bravura Solutions Ltd"
}, {
	"code": "BWF",
	"status": "ADJUST_ON",
	"title": "Blackwall Ltd"
}, {
	"code": "BWP",
	"status": "ADJUST_ON",
	"title": "BWP Trust"
}, {
	"code": "BWX",
	"status": "ADJUST_ON",
	"title": "BWX Ltd"
}, {
	"code": "BXB",
	"status": "ADJUST_ON",
	"title": "Brambles Ltd"
}, {
	"code": "BXN",
	"status": "ADJUST_ON",
	"title": "Bioxyne Ltd"
}, {
	"code": "BYE",
	"status": "ADJUST_ON",
	"title": "Byron Energy Ltd"
}, {
	"code": "BYH",
	"status": "ADJUST_ON",
	"title": "Bryah Resources Ltd"
}, {
	"code": "BYI",
	"status": "ADJUST_ON",
	"title": "Beyond International Ltd"
}, {
	"code": "C6C",
	"status": "ADJUST_ON",
	"title": "Copper Mountain Mining Corporation"
}, {
	"code": "CAA",
	"status": "ADJUST_ON",
	"title": "Capral Ltd"
}, {
	"code": "CAD",
	"status": "ADJUST_ON",
	"title": "Caeneus Minerals Ltd"
}, {
	"code": "CAE",
	"status": "ADJUST_ON",
	"title": "Cannindah Resources Ltd"
}, {
	"code": "CAF",
	"status": "ADJUST_ON",
	"title": "Centrepoint Alliance Ltd"
}, {
	"code": "CAG",
	"status": "ADJUST_ON",
	"title": "Cape Range Ltd"
}, {
	"code": "CAI",
	"status": "ADJUST_ON",
	"title": "Calidus Resources Ltd"
}, {
	"code": "CAJ",
	"status": "ADJUST_ON",
	"title": "Capitol Health Ltd"
}, {
	"code": "CAM",
	"status": "ADJUST_ON",
	"title": "Clime Capital Ltd"
}, {
	"code": "CAN",
	"status": "ADJUST_ON",
	"title": "Cann Group Ltd"
}, {
	"code": "CAP",
	"status": "ADJUST_ON",
	"title": "Carpentaria Resources Ltd"
}, {
	"code": "CAQ",
	"status": "ADJUST_ON",
	"title": "CAQ Holdings Ltd"
}, {
	"code": "CAR",
	"status": "ADJUST_ON",
	"title": "Carsales.com Ltd"
}, {
	"code": "CAT",
	"status": "ADJUST_ON",
	"title": "Catapult Group International Ltd"
}, {
	"code": "CAU",
	"status": "ADJUST_ON",
	"title": "Cronos Australia Ltd"
}, {
	"code": "CAV",
	"status": "ADJUST_ON",
	"title": "Carnavale Resources Ltd"
}, {
	"code": "CAY",
	"status": "ADJUST_ON",
	"title": "Canyon Resources Ltd"
}, {
	"code": "CAZ",
	"status": "ADJUST_ON",
	"title": "Cazaly Resources Ltd"
}, {
	"code": "CBA",
	"status": "ADJUST_ON",
	"title": "Commonwealth Bank of Australia"
}, {
	"code": "CBE",
	"status": "ADJUST_ON",
	"title": "Cobre Ltd"
}, {
	"code": "CBL",
	"status": "ADJUST_ON",
	"title": "Control Bionics Ltd"
}, {
	"code": "CBR",
	"status": "ADJUST_ON",
	"title": "Carbon Revolution Ltd"
}, {
	"code": "CBY",
	"status": "ADJUST_ON",
	"title": "Canterbury Resources Ltd"
}, {
	"code": "CCA",
	"status": "ADJUST_ON",
	"title": "Change Financial Ltd"
}, {
	"code": "CCE",
	"status": "ADJUST_ON",
	"title": "Carnegie Clean Energy Ltd"
}, {
	"code": "CCG",
	"status": "ADJUST_ON",
	"title": "Comms Group Ltd"
}, {
	"code": "CCJ",
	"status": "SUSPEND",
	"title": "County International Ltd"
}, {
	"code": "CCL",
	"status": "SUSPEND",
	"title": "Coca-Cola Amatil Ltd"
}, {
	"code": "CCP",
	"status": "ADJUST_ON",
	"title": "Credit Corp Group Ltd"
}, {
	"code": "CCR",
	"status": "ADJUST_ON",
	"title": "Credit Clear Ltd"
}, {
	"code": "CCV",
	"status": "ADJUST_ON",
	"title": "Cash Converters International"
}, {
	"code": "CCX",
	"status": "ADJUST_ON",
	"title": "City Chic Collective Ltd"
}, {
	"code": "CCZ",
	"status": "ADJUST_ON",
	"title": "Castillo Copper Ltd"
}, {
	"code": "CD1",
	"status": "ADJUST_ON",
	"title": "CD Private Equity Fund I"
}, {
	"code": "CD2",
	"status": "ADJUST_ON",
	"title": "CD Private Equity Fund Ii"
}, {
	"code": "CD3",
	"status": "ADJUST_ON",
	"title": "CD Private Equity Fund Iii"
}, {
	"code": "CDA",
	"status": "ADJUST_ON",
	"title": "Codan Ltd"
}, {
	"code": "CDD",
	"status": "ADJUST_ON",
	"title": "Cardno Ltd"
}, {
	"code": "CDH",
	"status": "SUSPEND",
	"title": "Chongherr Investments Ltd"
}, {
	"code": "CDM",
	"status": "ADJUST_ON",
	"title": "Cadence Capital Ltd"
}, {
	"code": "CDP",
	"status": "ADJUST_ON",
	"title": "Carindale Property Trust"
}, {
	"code": "CDT",
	"status": "ADJUST_ON",
	"title": "Castle Minerals Ltd"
}, {
	"code": "CDX",
	"status": "ADJUST_ON",
	"title": "Cardiex Ltd"
}, {
	"code": "CDY",
	"status": "ADJUST_ON",
	"title": "Cellmid Ltd"
}, {
	"code": "CE1",
	"status": "ADJUST_ON",
	"title": "Calima Energy Ltd"
}, {
	"code": "CEL",
	"status": "ADJUST_ON",
	"title": "Challenger Exploration Ltd"
}, {
	"code": "CEN",
	"status": "ADJUST_ON",
	"title": "Contact Energy Ltd"
}, {
	"code": "CETF",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Ftse China A50 ETF"
}, {
	"code": "CF1",
	"status": "ADJUST_ON",
	"title": "Complii Fintech Solutions Ltd"
}, {
	"code": "CFO",
	"status": "ADJUST_ON",
	"title": "Cfoam Ltd"
}, {
	"code": "CG1",
	"status": "ADJUST_ON",
	"title": "Carbonxt Group Ltd"
}, {
	"code": "CGA",
	"status": "ADJUST_ON",
	"title": "Contango Asset Management Ltd"
}, {
	"code": "CGB",
	"status": "ADJUST_ON",
	"title": "Cann Global Ltd"
}, {
	"code": "CGC",
	"status": "ADJUST_ON",
	"title": "Costa Group Holdings Ltd"
}, {
	"code": "CGF",
	"status": "ADJUST_ON",
	"title": "Challenger Ltd"
}, {
	"code": "CGM",
	"status": "SUSPEND",
	"title": "Cougar Metals NL"
}, {
	"code": "CGN",
	"status": "ADJUST_ON",
	"title": "Crater Gold Mining Ltd"
}, {
	"code": "CGO",
	"status": "ADJUST_ON",
	"title": "CPT Global Ltd"
}, {
	"code": "CGS",
	"status": "ADJUST_ON",
	"title": "Cogstate Ltd"
}, {
	"code": "CHC",
	"status": "ADJUST_ON",
	"title": "Charter Hall Group"
}, {
	"code": "CHK",
	"status": "ADJUST_ON",
	"title": "Cohiba Minerals Ltd"
}, {
	"code": "CHM",
	"status": "ADJUST_ON",
	"title": "Chimeric Therapeutics Ltd"
}, {
	"code": "CHN",
	"status": "ADJUST_ON",
	"title": "Chalice Mining Ltd"
}, {
	"code": "CHZ",
	"status": "ADJUST_ON",
	"title": "Chesser Resources Ltd"
}, {
	"code": "CI1",
	"status": "ADJUST_ON",
	"title": "Credit Intelligence Ltd"
}, {
	"code": "CIA",
	"status": "ADJUST_ON",
	"title": "Champion Iron Ltd"
}, {
	"code": "CIE",
	"status": "ADJUST_ON",
	"title": "Contango Income Generator Ltd"
}, {
	"code": "CII",
	"status": "ADJUST_ON",
	"title": "Ci Resources Ltd"
}, {
	"code": "CIM",
	"status": "ADJUST_ON",
	"title": "Cimic Group Ltd"
}, {
	"code": "CIN",
	"status": "ADJUST_ON",
	"title": "Carlton Investments Ltd"
}, {
	"code": "CINPA",
	"status": "ADJUST_ON",
	"title": "Carlton Investments Ltd"
}, {
	"code": "CIO",
	"status": "ADJUST_ON",
	"title": "Connected Io Ltd"
}, {
	"code": "CIP",
	"status": "ADJUST_ON",
	"title": "Centuria Industrial REIT"
}, {
	"code": "CIW",
	"status": "ADJUST_ON",
	"title": "Clime Investment Management Ltd"
}, {
	"code": "CKA",
	"status": "ADJUST_ON",
	"title": "Cokal Ltd"
}, {
	"code": "CKF",
	"status": "ADJUST_ON",
	"title": "Collins Foods Ltd"
}, {
	"code": "CL1",
	"status": "ADJUST_ON",
	"title": "Class Ltd"
}, {
	"code": "CL8",
	"status": "ADJUST_ON",
	"title": "Carly Holdings Ltd"
}, {
	"code": "CL8NE",
	"status": "ADJUST_ON",
	"title": "Carly Holdings Ltd"
}, {
	"code": "CLA",
	"status": "ADJUST_ON",
	"title": "Celsius Resources Ltd"
}, {
	"code": "CLB",
	"status": "ADJUST_ON",
	"title": "Candy Club Holdings Ltd"
}, {
	"code": "CLDD",
	"status": "ADJUST_ON",
	"title": "Betashares Cloud Computing ETF"
}, {
	"code": "CLE",
	"status": "SUSPEND",
	"title": "Cyclone Metals Ltd"
}, {
	"code": "CLH",
	"status": "ADJUST_ON",
	"title": "Collection House Ltd"
}, {
	"code": "CLI",
	"status": "SUSPEND",
	"title": "Croplogic Ltd"
}, {
	"code": "CLNE",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Global Clean Energy ETF"
}, {
	"code": "CLT",
	"status": "ADJUST_ON",
	"title": "Cellnet Group Ltd"
}, {
	"code": "CLU",
	"status": "ADJUST_ON",
	"title": "Cluey Ltd"
}, {
	"code": "CLV",
	"status": "ADJUST_ON",
	"title": "Clover Corporation Ltd"
}, {
	"code": "CLW",
	"status": "ADJUST_ON",
	"title": "Charter Hall Long Wale REIT"
}, {
	"code": "CLX",
	"status": "ADJUST_ON",
	"title": "Cti Logistics Ltd"
}, {
	"code": "CLZ",
	"status": "ADJUST_ON",
	"title": "Classic Minerals Ltd"
}, {
	"code": "CM8",
	"status": "ADJUST_ON",
	"title": "Crowd Media Holdings Ltd"
}, {
	"code": "CMC",
	"status": "SUSPEND",
	"title": "China Magnesium Corporation Ltd"
}, {
	"code": "CMD",
	"status": "ADJUST_ON",
	"title": "Cassius Mining Ltd"
}, {
	"code": "CML",
	"status": "ADJUST_ON",
	"title": "Chase Mining Corporation Ltd"
}, {
	"code": "CMM",
	"status": "ADJUST_ON",
	"title": "Capricorn Metals Ltd"
}, {
	"code": "CMP",
	"status": "ADJUST_ON",
	"title": "Compumedics Ltd"
}, {
	"code": "CMW",
	"status": "ADJUST_ON",
	"title": "Cromwell Property Group"
}, {
	"code": "CNB",
	"status": "ADJUST_ON",
	"title": "Carnaby Resources Ltd"
}, {
	"code": "CNEW",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors China New Economy ETF"
}, {
	"code": "CNI",
	"status": "ADJUST_ON",
	"title": "Centuria Capital Group"
}, {
	"code": "CNJ",
	"status": "ADJUST_ON",
	"title": "Conico Ltd"
}, {
	"code": "CNL",
	"status": "ADJUST_ON",
	"title": "Celamin Holdings Ltd"
}, {
	"code": "CNU",
	"status": "ADJUST_ON",
	"title": "Chorus Ltd"
}, {
	"code": "CNW",
	"status": "ADJUST_ON",
	"title": "Cirrus Networks Holdings Ltd"
}, {
	"code": "COB",
	"status": "ADJUST_ON",
	"title": "Cobalt Blue Holdings Ltd"
}, {
	"code": "COD",
	"status": "ADJUST_ON",
	"title": "Coda Minerals Ltd"
}, {
	"code": "COE",
	"status": "ADJUST_ON",
	"title": "Cooper Energy Ltd"
}, {
	"code": "COF",
	"status": "ADJUST_ON",
	"title": "Centuria Office REIT"
}, {
	"code": "COG",
	"status": "ADJUST_ON",
	"title": "COG Financial Services Ltd"
}, {
	"code": "COH",
	"status": "ADJUST_ON",
	"title": "Cochlear Ltd"
}, {
	"code": "COI",
	"status": "ADJUST_ON",
	"title": "Comet Ridge Ltd"
}, {
	"code": "COL",
	"status": "ADJUST_ON",
	"title": "Coles Group Ltd"
}, {
	"code": "COO",
	"status": "ADJUST_ON",
	"title": "Corum Group Ltd"
}, {
	"code": "COS",
	"status": "ADJUST_ON",
	"title": "Cosol Ltd"
}, {
	"code": "COY",
	"status": "ADJUST_ON",
	"title": "Coppermoly Ltd"
}, {
	"code": "CPH",
	"status": "ADJUST_ON",
	"title": "Creso Pharma Ltd"
}, {
	"code": "CPN",
	"status": "ADJUST_ON",
	"title": "Caspin Resources Ltd"
}, {
	"code": "CPT",
	"status": "ADJUST_ON",
	"title": "Cipherpoint Ltd"
}, {
	"code": "CPU",
	"status": "ADJUST_ON",
	"title": "Computershare Ltd"
}, {
	"code": "CPV",
	"status": "ADJUST_ON",
	"title": "Clearvue Technologies Ltd"
}, {
	"code": "CQE",
	"status": "ADJUST_ON",
	"title": "Charter Hall Social Infrastructure REIT"
}, {
	"code": "CQR",
	"status": "ADJUST_ON",
	"title": "Charter Hall Retail REIT"
}, {
	"code": "CR1",
	"status": "ADJUST_ON",
	"title": "Constellation Resources Ltd"
}, {
	"code": "CR9",
	"status": "ADJUST_ON",
	"title": "Corella Resources Ltd"
}, {
	"code": "CRB",
	"status": "SUSPEND",
	"title": "Carbine Resources Ltd"
}, {
	"code": "CRED",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Investment Grade Corporate Bond ETF"
}, {
	"code": "CRL",
	"status": "ADJUST_ON",
	"title": "Comet Resources Ltd"
}, {
	"code": "CRM",
	"status": "ADJUST_ON",
	"title": "Carbon Minerals Ltd"
}, {
	"code": "CRN",
	"status": "ADJUST_ON",
	"title": "Coronado Global Resources Inc"
}, {
	"code": "CRO",
	"status": "ADJUST_ON",
	"title": "Cirralto Ltd"
}, {
	"code": "CRS",
	"status": "ADJUST_ON",
	"title": "Caprice Resources Ltd"
}, {
	"code": "CRW",
	"status": "ADJUST_ON",
	"title": "Cashrewards Ltd"
}, {
	"code": "CSE",
	"status": "ADJUST_ON",
	"title": "Copper Strike Ltd"
}, {
	"code": "CSL",
	"status": "ADJUST_ON",
	"title": "CSL Ltd"
}, {
	"code": "CSR",
	"status": "ADJUST_ON",
	"title": "CSR Ltd"
}, {
	"code": "CSS",
	"status": "ADJUST_ON",
	"title": "Clean Seas Seafood Ltd"
}, {
	"code": "CST",
	"status": "ADJUST_ON",
	"title": "Castile Resources Ltd"
}, {
	"code": "CSX",
	"status": "ADJUST_ON",
	"title": "Cleanspace Holdings Ltd"
}, {
	"code": "CT1",
	"status": "ADJUST_ON",
	"title": "Constellation Technologies Ltd"
}, {
	"code": "CTD",
	"status": "ADJUST_ON",
	"title": "Corporate Travel Management Ltd"
}, {
	"code": "CTE",
	"status": "ADJUST_ON",
	"title": "Cryosite Ltd"
}, {
	"code": "CTM",
	"status": "ADJUST_ON",
	"title": "Centaurus Metals Ltd"
}, {
	"code": "CTO",
	"status": "ADJUST_ON",
	"title": "Citigold Corporation Ltd"
}, {
	"code": "CTP",
	"status": "ADJUST_ON",
	"title": "Central Petroleum Ltd"
}, {
	"code": "CTT",
	"status": "ADJUST_ON",
	"title": "Cettire Ltd"
}, {
	"code": "CUE",
	"status": "ADJUST_ON",
	"title": "CUE Energy Resources Ltd"
}, {
	"code": "CUL",
	"status": "ADJUST_ON",
	"title": "Cullen Resources Ltd"
}, {
	"code": "CUP",
	"status": "ADJUST_ON",
	"title": "Countplus Ltd"
}, {
	"code": "CURE",
	"status": "ADJUST_ON",
	"title": "ETFs S&P Biotech ETF"
}, {
	"code": "CUV",
	"status": "ADJUST_ON",
	"title": "Clinuvel Pharmaceuticals Ltd"
}, {
	"code": "CV1",
	"status": "ADJUST_ON",
	"title": "CV Check Ltd"
}, {
	"code": "CVC",
	"status": "ADJUST_ON",
	"title": "CVC Ltd"
}, {
	"code": "CVL",
	"status": "ADJUST_ON",
	"title": "Civmec Ltd"
}, {
	"code": "CVN",
	"status": "ADJUST_ON",
	"title": "Carnarvon Petroleum Ltd"
}, {
	"code": "CVS",
	"status": "SUSPEND",
	"title": "Cervantes Corporation Ltd"
}, {
	"code": "CVV",
	"status": "ADJUST_ON",
	"title": "Caravel Minerals Ltd"
}, {
	"code": "CVW",
	"status": "ADJUST_ON",
	"title": "Clearview Wealth Ltd"
}, {
	"code": "CWL",
	"status": "SUSPEND",
	"title": "Consolidated Financial Holdings Ltd"
}, {
	"code": "CWN",
	"status": "ADJUST_ON",
	"title": "Crown Resorts Ltd"
}, {
	"code": "CWP",
	"status": "ADJUST_ON",
	"title": "Cedar Woods Properties Ltd"
}, {
	"code": "CWX",
	"status": "ADJUST_ON",
	"title": "Carawine Resources Ltd"
}, {
	"code": "CWY",
	"status": "ADJUST_ON",
	"title": "Cleanaway Waste Management Ltd"
}, {
	"code": "CWZ",
	"status": "ADJUST_ON",
	"title": "Cashwerkz Ltd"
}, {
	"code": "CXL",
	"status": "ADJUST_ON",
	"title": "CALIX Ltd"
}, {
	"code": "CXM",
	"status": "ADJUST_ON",
	"title": "Centrex Metals Ltd"
}, {
	"code": "CXO",
	"status": "ADJUST_ON",
	"title": "Core Lithium Ltd"
}, {
	"code": "CXU",
	"status": "ADJUST_ON",
	"title": "Cauldron Energy Ltd"
}, {
	"code": "CXX",
	"status": "ADJUST_ON",
	"title": "Cradle Resources Ltd"
}, {
	"code": "CXZ",
	"status": "ADJUST_ON",
	"title": "Connexion Telematics Ltd"
}, {
	"code": "CY5",
	"status": "ADJUST_ON",
	"title": "CYGNUS Gold Ltd"
}, {
	"code": "CYC",
	"status": "ADJUST_ON",
	"title": "Cyclopharm Ltd"
}, {
	"code": "CYG",
	"status": "ADJUST_ON",
	"title": "Coventry Group Ltd"
}, {
	"code": "CYL",
	"status": "ADJUST_ON",
	"title": "Catalyst Metals Ltd"
}, {
	"code": "CYM",
	"status": "ADJUST_ON",
	"title": "Cyprium Metals Ltd"
}, {
	"code": "CYP",
	"status": "ADJUST_ON",
	"title": "Cynata Therapeutics Ltd"
}, {
	"code": "CYQ",
	"status": "ADJUST_ON",
	"title": "CYCLIQ Group Ltd"
}, {
	"code": "CYQNC",
	"status": "ADJUST_ON",
	"title": "CYCLIQ Group Ltd"
}, {
	"code": "CZL",
	"status": "ADJUST_ON",
	"title": "Consolidated ZINC Ltd"
}, {
	"code": "CZN",
	"status": "ADJUST_ON",
	"title": "Corazon Mining Ltd"
}, {
	"code": "CZR",
	"status": "ADJUST_ON",
	"title": "CZR Resources Ltd"
}, {
	"code": "D2O",
	"status": "ADJUST_ON",
	"title": "Duxton Water Ltd"
}, {
	"code": "DAF",
	"status": "ADJUST_ON",
	"title": "Discovery Africa Ltd"
}, {
	"code": "DAV",
	"status": "ADJUST_ON",
	"title": "Davenport Resources Ltd"
}, {
	"code": "DBBF",
	"status": "ADJUST_ON",
	"title": "Betashares Ethical Diversified Balanced ETF"
}, {
	"code": "DBF",
	"status": "ADJUST_ON",
	"title": "Duxton Broadacre Farms Ltd"
}, {
	"code": "DBI",
	"status": "ADJUST_ON",
	"title": "Dalrymple Bay Infrastructure Ltd"
}, {
	"code": "DC2",
	"status": "ADJUST_ON",
	"title": "DC Two Ltd"
}, {
	"code": "DCC",
	"status": "ADJUST_ON",
	"title": "Digitalx Ltd"
}, {
	"code": "DCG",
	"status": "ADJUST_ON",
	"title": "Decmil Group Ltd"
}, {
	"code": "DCL",
	"status": "ADJUST_ON",
	"title": "Domacom Ltd"
}, {
	"code": "DCN",
	"status": "ADJUST_ON",
	"title": "Dacian Gold Ltd"
}, {
	"code": "DCX",
	"status": "ADJUST_ON",
	"title": "Discovex Resources Ltd"
}, {
	"code": "DDB",
	"status": "ADJUST_ON",
	"title": "Dynamic Drill and Blast Holdings Ltd"
}, {
	"code": "DDD",
	"status": "ADJUST_ON",
	"title": "3D Resources Ltd"
}, {
	"code": "DDH",
	"status": "ADJUST_ON",
	"title": "DDH1 Ltd"
}, {
	"code": "DDR",
	"status": "ADJUST_ON",
	"title": "Dicker Data Ltd"
}, {
	"code": "DDT",
	"status": "ADJUST_ON",
	"title": "Datadot Technology Ltd"
}, {
	"code": "DEG",
	"status": "ADJUST_ON",
	"title": "De Grey Mining Ltd"
}, {
	"code": "DEL",
	"status": "ADJUST_ON",
	"title": "Delorean Corporation Ltd"
}, {
	"code": "DEM",
	"status": "ADJUST_ON",
	"title": "De.Mem Ltd"
}, {
	"code": "DET",
	"status": "SUSPEND",
	"title": "Dealt Ltd"
}, {
	"code": "DEV",
	"status": "ADJUST_ON",
	"title": "DEVEX Resources Ltd"
}, {
	"code": "DEX",
	"status": "ADJUST_ON",
	"title": "Duke Exploration Ltd"
}, {
	"code": "DGGF",
	"status": "ADJUST_ON",
	"title": "Betashares Ethical Diversified Growth ETF"
}, {
	"code": "DGH",
	"status": "ADJUST_ON",
	"title": "Desane Group Holdings Ltd"
}, {
	"code": "DGO",
	"status": "ADJUST_ON",
	"title": "DGO Gold Ltd"
}, {
	"code": "DGR",
	"status": "ADJUST_ON",
	"title": "DGR Global Ltd"
}, {
	"code": "DHG",
	"status": "ADJUST_ON",
	"title": "Domain Holdings Australia Ltd"
}, {
	"code": "DHHF",
	"status": "ADJUST_ON",
	"title": "Betashares Diversified All Growth ETF"
}, {
	"code": "DJRE",
	"status": "ADJUST_ON",
	"title": "SPDR Dow Jones Global Real Estate Fund"
}, {
	"code": "DJW",
	"status": "ADJUST_ON",
	"title": "Djerriwarrh Investments Ltd"
}, {
	"code": "DJWN",
	"status": "ADJUST_ON",
	"title": "Djerriwarrh Investments Ltd"
}, {
	"code": "DKM",
	"status": "ADJUST_ON",
	"title": "Duketon Mining Ltd"
}, {
	"code": "DLC",
	"status": "ADJUST_ON",
	"title": "Delecta Ltd"
}, {
	"code": "DLT",
	"status": "ADJUST_ON",
	"title": "Delta Drone International Ltd"
}, {
	"code": "DM1",
	"status": "ADJUST_ON",
	"title": "Desert Metals Ltd"
}, {
	"code": "DMC",
	"status": "ADJUST_ON",
	"title": "Design Milk Co Ltd"
}, {
	"code": "DME",
	"status": "ADJUST_ON",
	"title": "Dome Gold Mines Ltd"
}, {
	"code": "DMG",
	"status": "SUSPEND",
	"title": "Dragon Mountain Gold Ltd"
}, {
	"code": "DMP",
	"status": "ADJUST_ON",
	"title": "Domino's PIZZA Enterprises Ltd"
}, {
	"code": "DNA",
	"status": "ADJUST_ON",
	"title": "Donaco International Ltd"
}, {
	"code": "DNK",
	"status": "ADJUST_ON",
	"title": "Danakali Ltd"
}, {
	"code": "DOC",
	"status": "ADJUST_ON",
	"title": "Doctor Care Anywhere Group Plc"
}, {
	"code": "DOR",
	"status": "ADJUST_ON",
	"title": "Doriemus Plc"
}, {
	"code": "DOU",
	"status": "ADJUST_ON",
	"title": "Douugh Ltd"
}, {
	"code": "DOW",
	"status": "ADJUST_ON",
	"title": "Downer Edi Ltd"
}, {
	"code": "DRE",
	"status": "ADJUST_ON",
	"title": "Dreadnought Resources Ltd"
}, {
	"code": "DRO",
	"status": "ADJUST_ON",
	"title": "Droneshield Ltd"
}, {
	"code": "DRR",
	"status": "ADJUST_ON",
	"title": "Deterra Royalties Ltd"
}, {
	"code": "DRUG",
	"status": "ADJUST_ON",
	"title": "Betashares Global Healthcare ETF - Currency Hedged"
}, {
	"code": "DRX",
	"status": "ADJUST_ON",
	"title": "Diatreme Resources Ltd"
}, {
	"code": "DSE",
	"status": "ADJUST_ON",
	"title": "Dropsuite Ltd"
}, {
	"code": "DSK",
	"status": "ADJUST_ON",
	"title": "Dusk Group Ltd"
}, {
	"code": "DTC",
	"status": "ADJUST_ON",
	"title": "Damstra Holdings Ltd"
}, {
	"code": "DTI",
	"status": "ADJUST_ON",
	"title": "DTI Group Ltd"
}, {
	"code": "DTL",
	"status": "ADJUST_ON",
	"title": "Data#3 Ltd"
}, {
	"code": "DTM",
	"status": "ADJUST_ON",
	"title": "Dart Mining NL"
}, {
	"code": "DTR",
	"status": "ADJUST_ON",
	"title": "Dateline Resources Ltd"
}, {
	"code": "DTS",
	"status": "ADJUST_ON",
	"title": "Dragontail Systems Ltd"
}, {
	"code": "DTZ",
	"status": "ADJUST_ON",
	"title": "DOTZ Nano Ltd"
}, {
	"code": "DUB",
	"status": "ADJUST_ON",
	"title": "Dubber Corporation Ltd"
}, {
	"code": "DUG",
	"status": "ADJUST_ON",
	"title": "DUG Technology Ltd"
}, {
	"code": "DUI",
	"status": "ADJUST_ON",
	"title": "Diversified United Investment Ltd"
}, {
	"code": "DUR",
	"status": "ADJUST_ON",
	"title": "Duratec Ltd"
}, {
	"code": "DVDY",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Morningstar Australian Moat Income ETF"
}, {
	"code": "DVL",
	"status": "ADJUST_ON",
	"title": "Dorsavi Ltd"
}, {
	"code": "DVN",
	"status": "ADJUST_ON",
	"title": "Devine Ltd"
}, {
	"code": "DW8",
	"status": "ADJUST_ON",
	"title": "Digital Wine Ventures Ltd"
}, {
	"code": "DXB",
	"status": "ADJUST_ON",
	"title": "Dimerix Ltd"
}, {
	"code": "DXN",
	"status": "ADJUST_ON",
	"title": "DXN Ltd"
}, {
	"code": "DXS",
	"status": "ADJUST_ON",
	"title": "Dexus"
}, {
	"code": "DYL",
	"status": "ADJUST_ON",
	"title": "Deep Yellow Ltd"
}, {
	"code": "DZZF",
	"status": "ADJUST_ON",
	"title": "Betashares Ethical Diversified High Growth ETF"
}, {
	"code": "E200",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 200 Esg Fund"
}, {
	"code": "E25",
	"status": "ADJUST_ON",
	"title": "Element 25 Ltd"
}, {
	"code": "E2E",
	"status": "SUSPEND",
	"title": "Eon NRG Ltd"
}, {
	"code": "E2M",
	"status": "ADJUST_ON",
	"title": "E2 Metals Ltd"
}, {
	"code": "EAI",
	"status": "ADJUST_ON",
	"title": "Ellerston Asian Investments Ltd"
}, {
	"code": "EAS",
	"status": "ADJUST_ON",
	"title": "Easton Investments Ltd"
}, {
	"code": "EAX",
	"status": "ADJUST_ON",
	"title": "Energy Action Ltd"
}, {
	"code": "EBG",
	"status": "ADJUST_ON",
	"title": "Eumundi Group Ltd"
}, {
	"code": "EBND",
	"status": "ADJUST_ON",
	"title": "Vaneck Emerging Inc Opportunities Active ETF (Managed Fund)"
}, {
	"code": "EBO",
	"status": "ADJUST_ON",
	"title": "Ebos Group Ltd"
}, {
	"code": "ECF",
	"status": "ADJUST_ON",
	"title": "Elanor Commercial Property Fund"
}, {
	"code": "ECG",
	"status": "ADJUST_ON",
	"title": "Ecargo Holdings Ltd"
}, {
	"code": "ECL",
	"status": "ADJUST_ON",
	"title": "Excelsior Capital Ltd"
}, {
	"code": "ECP",
	"status": "ADJUST_ON",
	"title": "ECP Emerging Growth Ltd"
}, {
	"code": "ECS",
	"status": "ADJUST_ON",
	"title": "ECS Botanics Holdings Ltd"
}, {
	"code": "ECT",
	"status": "ADJUST_ON",
	"title": "Environmental Clean Technologies Ltd"
}, {
	"code": "ECX",
	"status": "ADJUST_ON",
	"title": "Eclipx Group Ltd"
}, {
	"code": "EDC",
	"status": "ADJUST_ON",
	"title": "Eildon Capital Group"
}, {
	"code": "EDE",
	"status": "ADJUST_ON",
	"title": "Eden Innovations Ltd"
}, {
	"code": "EEG",
	"status": "ADJUST_ON",
	"title": "Empire Energy Group Ltd"
}, {
	"code": "EER",
	"status": "SUSPEND",
	"title": "East Energy Resources Ltd"
}, {
	"code": "EEU",
	"status": "ADJUST_ON",
	"title": "Betashares Euro ETF"
}, {
	"code": "EFE",
	"status": "ADJUST_ON",
	"title": "Eastern Iron Ltd"
}, {
	"code": "EGG",
	"status": "ADJUST_ON",
	"title": "Enero Group Ltd"
}, {
	"code": "EGH",
	"status": "ADJUST_ON",
	"title": "Eureka Group Holdings Ltd"
}, {
	"code": "EGL",
	"status": "ADJUST_ON",
	"title": "Environmental Group Ltd (the)"
}, {
	"code": "EGN",
	"status": "ADJUST_ON",
	"title": "Engenco Ltd"
}, {
	"code": "EGR",
	"status": "ADJUST_ON",
	"title": "Ecograf Ltd"
}, {
	"code": "EGY",
	"status": "ADJUST_ON",
	"title": "Energy Technologies Ltd"
}, {
	"code": "EHE",
	"status": "ADJUST_ON",
	"title": "Estia Health Ltd"
}, {
	"code": "EHL",
	"status": "ADJUST_ON",
	"title": "Emeco Holdings Ltd"
}, {
	"code": "EIGA",
	"status": "ADJUST_ON",
	"title": "Einvest Income Generator Fund (Managed Fund)"
}, {
	"code": "EINC",
	"status": "ADJUST_ON",
	"title": "Betashares Legg Mason Equity Income Fund (Managed Fund)"
}, {
	"code": "ELD",
	"status": "ADJUST_ON",
	"title": "Elders Ltd"
}, {
	"code": "ELE",
	"status": "ADJUST_ON",
	"title": "Elmore Ltd"
}, {
	"code": "ELO",
	"status": "ADJUST_ON",
	"title": "Elmo Software Ltd"
}, {
	"code": "ELS",
	"status": "ADJUST_ON",
	"title": "Elsight Ltd"
}, {
	"code": "ELT",
	"status": "ADJUST_ON",
	"title": "Elementos Ltd"
}, {
	"code": "EM1",
	"status": "ADJUST_ON",
	"title": "Emerge Gaming Ltd"
}, {
	"code": "EM2",
	"status": "ADJUST_ON",
	"title": "Eagle Mountain Mining Ltd"
}, {
	"code": "EMB",
	"status": "ADJUST_ON",
	"title": "Embelton Ltd"
}, {
	"code": "EMD",
	"status": "ADJUST_ON",
	"title": "Emyria Ltd"
}, {
	"code": "EME",
	"status": "ADJUST_ON",
	"title": "Energy Metals Ltd"
}, {
	"code": "EMH",
	"status": "ADJUST_ON",
	"title": "European Metals Holdings Ltd"
}, {
	"code": "EMKT",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI Multifactor Emerging Markets Equity ETF"
}, {
	"code": "EML",
	"status": "ADJUST_ON",
	"title": "EML Payments Ltd"
}, {
	"code": "EMMG",
	"status": "ADJUST_ON",
	"title": "Betashares Legg Mason Emerging Markets Fund (Managed Fund)"
}, {
	"code": "EMN",
	"status": "ADJUST_ON",
	"title": "Euro Manganese Inc"
}, {
	"code": "EMP",
	"status": "ADJUST_ON",
	"title": "Emperor Energy Ltd"
}, {
	"code": "EMR",
	"status": "ADJUST_ON",
	"title": "Emerald Resources NL"
}, {
	"code": "EMT",
	"status": "ADJUST_ON",
	"title": "Emetals Ltd"
}, {
	"code": "EMU",
	"status": "ADJUST_ON",
	"title": "EMU NL"
}, {
	"code": "EMUCA",
	"status": "ADJUST_ON",
	"title": "EMU NL"
}, {
	"code": "EMV",
	"status": "ADJUST_ON",
	"title": "Emvision Medical Devices Ltd"
}, {
	"code": "EN1",
	"status": "ADJUST_ON",
	"title": "Engage:BDR Ltd"
}, {
	"code": "ENA",
	"status": "ADJUST_ON",
	"title": "Ensurance Ltd"
}, {
	"code": "ENN",
	"status": "ADJUST_ON",
	"title": "Elanor Investors Group"
}, {
	"code": "ENR",
	"status": "ADJUST_ON",
	"title": "Encounter Resources Ltd"
}, {
	"code": "ENT",
	"status": "ADJUST_ON",
	"title": "Enterprise Metals Ltd"
}, {
	"code": "ENV",
	"status": "ADJUST_ON",
	"title": "Enova Mining Ltd"
}, {
	"code": "ENX",
	"status": "ADJUST_ON",
	"title": "Enegex Ltd"
}, {
	"code": "EOF",
	"status": "ADJUST_ON",
	"title": "Ecofibre Ltd"
}, {
	"code": "EOL",
	"status": "ADJUST_ON",
	"title": "Energy One Ltd"
}, {
	"code": "EOS",
	"status": "ADJUST_ON",
	"title": "Electro Optic Systems Holdings Ltd"
}, {
	"code": "EP1",
	"status": "ADJUST_ON",
	"title": "E&P Financial Group Ltd"
}, {
	"code": "EPD",
	"status": "ADJUST_ON",
	"title": "Empired Ltd"
}, {
	"code": "EPM",
	"status": "ADJUST_ON",
	"title": "Eclipse Metals Ltd"
}, {
	"code": "EPN",
	"status": "ADJUST_ON",
	"title": "Epsilon Healthcare Ltd"
}, {
	"code": "EPY",
	"status": "ADJUST_ON",
	"title": "Earlypay Ltd"
}, {
	"code": "EQE",
	"status": "ADJUST_ON",
	"title": "EQUUS Mining Ltd"
}, {
	"code": "EQR",
	"status": "ADJUST_ON",
	"title": "EQ Resources Ltd"
}, {
	"code": "EQT",
	"status": "ADJUST_ON",
	"title": "EQT Holdings Ltd"
}, {
	"code": "EQX",
	"status": "ADJUST_ON",
	"title": "Equatorial Resources Ltd"
}, {
	"code": "ERA",
	"status": "ADJUST_ON",
	"title": "Energy Resources of Australia Ltd"
}, {
	"code": "ERD",
	"status": "ADJUST_ON",
	"title": "Eroad Ltd"
}, {
	"code": "ERF",
	"status": "ADJUST_ON",
	"title": "Elanor Retail Property Fund"
}, {
	"code": "ERG",
	"status": "ADJUST_ON",
	"title": "Eneco Refresh Ltd"
}, {
	"code": "ERL",
	"status": "ADJUST_ON",
	"title": "Empire Resources Ltd"
}, {
	"code": "ERM",
	"status": "ADJUST_ON",
	"title": "Emmerson Resources Ltd"
}, {
	"code": "ERTH",
	"status": "ADJUST_ON",
	"title": "Betashares Climate Change Innovation ETF"
}, {
	"code": "ERW",
	"status": "ADJUST_ON",
	"title": "Errawarra Resources Ltd"
}, {
	"code": "ESE",
	"status": "SUSPEND",
	"title": "Esense-Lab Ltd"
}, {
	"code": "ESGI",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI International Sustainable Equity ETF"
}, {
	"code": "ESH",
	"status": "ADJUST_ON",
	"title": "Esports Mogul Ltd"
}, {
	"code": "ESK",
	"status": "ADJUST_ON",
	"title": "Etherstack Plc"
}, {
	"code": "ESPO",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Video Gaming and Esports ETF"
}, {
	"code": "ESR",
	"status": "ADJUST_ON",
	"title": "Estrella Resources Ltd"
}, {
	"code": "ESS",
	"status": "ADJUST_ON",
	"title": "Essential Metals Ltd"
}, {
	"code": "ESTX",
	"status": "ADJUST_ON",
	"title": "ETFs Euro STOXX 50 ETF"
}, {
	"code": "ETHI",
	"status": "ADJUST_ON",
	"title": "Betashares Global Sustainability Leaders ETF"
}, {
	"code": "ETPMAG",
	"status": "ADJUST_ON",
	"title": "ETFs Metal Securities Australia Ltd"
}, {
	"code": "ETPMPD",
	"status": "ADJUST_ON",
	"title": "ETFs Metal Securities Australia Ltd"
}, {
	"code": "ETPMPM",
	"status": "ADJUST_ON",
	"title": "ETFs Metal Securities Australia Ltd"
}, {
	"code": "ETPMPT",
	"status": "ADJUST_ON",
	"title": "ETFs Metal Securities Australia Ltd"
}, {
	"code": "EUR",
	"status": "ADJUST_ON",
	"title": "European Lithium Ltd"
}, {
	"code": "EVE",
	"status": "ADJUST_ON",
	"title": "EVE Investments Ltd"
}, {
	"code": "EVN",
	"status": "ADJUST_ON",
	"title": "Evolution Mining Ltd"
}, {
	"code": "EVO",
	"status": "ADJUST_ON",
	"title": "Evolve Education Group Ltd"
}, {
	"code": "EVS",
	"status": "ADJUST_ON",
	"title": "Envirosuite Ltd"
}, {
	"code": "EVT",
	"status": "ADJUST_ON",
	"title": "Event Hospitality and Entertainment Ltd"
}, {
	"code": "EVZ",
	"status": "ADJUST_ON",
	"title": "EVZ Ltd"
}, {
	"code": "EWC",
	"status": "ADJUST_ON",
	"title": "Energy World Corporation Ltd"
}, {
	"code": "EX1",
	"status": "ADJUST_ON",
	"title": "Exopharm Ltd"
}, {
	"code": "EX20",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Ex-20 Portfolio Diversifier ETF"
}, {
	"code": "EXL",
	"status": "ADJUST_ON",
	"title": "Elixinol Global Ltd"
}, {
	"code": "EXO",
	"status": "SUSPEND",
	"title": "ENNOX Group Ltd"
}, {
	"code": "EXP",
	"status": "ADJUST_ON",
	"title": "Experience Co Ltd"
}, {
	"code": "EXR",
	"status": "ADJUST_ON",
	"title": "Elixir Energy Ltd"
}, {
	"code": "EYE",
	"status": "ADJUST_ON",
	"title": "Nova EYE Medical Ltd"
}, {
	"code": "EZL",
	"status": "ADJUST_ON",
	"title": "EUROZ Ltd"
}, {
	"code": "EZZ",
	"status": "ADJUST_ON",
	"title": "EZZ Life Science Holdings Ltd"
}, {
	"code": "F100",
	"status": "ADJUST_ON",
	"title": "Betashares Ftse 100 ETF"
}, {
	"code": "FAIR",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Sustainability Leaders ETF"
}, {
	"code": "FANG",
	"status": "ADJUST_ON",
	"title": "ETFs Fang+ ETF"
}, {
	"code": "FAR",
	"status": "SUSPEND",
	"title": "FAR Ltd"
}, {
	"code": "FAU",
	"status": "ADJUST_ON",
	"title": "First Au Ltd"
}, {
	"code": "FBR",
	"status": "ADJUST_ON",
	"title": "FBR Ltd"
}, {
	"code": "FBU",
	"status": "ADJUST_ON",
	"title": "Fletcher Building Ltd"
}, {
	"code": "FCL",
	"status": "ADJUST_ON",
	"title": "Fineos Corporation Holdings Plc"
}, {
	"code": "FCT",
	"status": "ADJUST_ON",
	"title": "Firstwave Cloud Technology Ltd"
}, {
	"code": "FDM",
	"status": "SUSPEND",
	"title": "Freedom Oil and Gas Ltd"
}, {
	"code": "FDV",
	"status": "ADJUST_ON",
	"title": "Frontier Digital Ventures Ltd"
}, {
	"code": "FE8",
	"status": "SUSPEND",
	"title": "Faster Enterprises Ltd"
}, {
	"code": "FEI",
	"status": "SUSPEND",
	"title": "Fe Investments Group Ltd"
}, {
	"code": "FEL",
	"status": "ADJUST_ON",
	"title": "Fe Ltd"
}, {
	"code": "FEMX",
	"status": "ADJUST_ON",
	"title": "Fidelity Global Emerging Markets Fund (Managed Fund)"
}, {
	"code": "FEX",
	"status": "ADJUST_ON",
	"title": "FENIX Resources Ltd"
}, {
	"code": "FFC",
	"status": "ADJUST_ON",
	"title": "Farmaforce Ltd"
}, {
	"code": "FFF",
	"status": "ADJUST_ON",
	"title": "Forbidden Foods Ltd"
}, {
	"code": "FFG",
	"status": "ADJUST_ON",
	"title": "Fatfish Group Ltd"
}, {
	"code": "FFI",
	"status": "ADJUST_ON",
	"title": "FFI Holdings Ltd"
}, {
	"code": "FFR",
	"status": "ADJUST_ON",
	"title": "Firefly Resources Ltd"
}, {
	"code": "FFT",
	"status": "ADJUST_ON",
	"title": "Future First Technologies Ltd"
}, {
	"code": "FFX",
	"status": "ADJUST_ON",
	"title": "Firefinch Ltd"
}, {
	"code": "FGG",
	"status": "ADJUST_ON",
	"title": "Future Generation Global Investment Company Ltd"
}, {
	"code": "FGL",
	"status": "ADJUST_ON",
	"title": "Frugl Group Ltd"
}, {
	"code": "FGO",
	"status": "ADJUST_ON",
	"title": "Fargo Enterprises Ltd"
}, {
	"code": "FGR",
	"status": "ADJUST_ON",
	"title": "First Graphene Ltd"
}, {
	"code": "FGX",
	"status": "ADJUST_ON",
	"title": "Future Generation Investment Company Ltd"
}, {
	"code": "FHS",
	"status": "ADJUST_ON",
	"title": "Freehill Mining Ltd"
}, {
	"code": "FID",
	"status": "ADJUST_ON",
	"title": "Fiducian Group Ltd"
}, {
	"code": "FIJ",
	"status": "ADJUST_ON",
	"title": "Fiji Kava Ltd"
}, {
	"code": "FIN",
	"status": "ADJUST_ON",
	"title": "FIN Resources Ltd"
}, {
	"code": "FLC",
	"status": "ADJUST_ON",
	"title": "Fluence Corporation Ltd"
}, {
	"code": "FLN",
	"status": "ADJUST_ON",
	"title": "Freelancer Ltd"
}, {
	"code": "FLOT",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Floating Rate ETF"
}, {
	"code": "FLT",
	"status": "ADJUST_ON",
	"title": "Flight Centre Travel Group Ltd"
}, {
	"code": "FLX",
	"status": "ADJUST_ON",
	"title": "FELIX Group Holdings Ltd"
}, {
	"code": "FMG",
	"status": "ADJUST_ON",
	"title": "Fortescue Metals Group Ltd"
}, {
	"code": "FML",
	"status": "ADJUST_ON",
	"title": "Focus Minerals Ltd"
}, {
	"code": "FMS",
	"status": "ADJUST_ON",
	"title": "Flinders Mines Ltd"
}, {
	"code": "FNP",
	"status": "ADJUST_ON",
	"title": "Freedom Foods Group Ltd"
}, {
	"code": "FNT",
	"status": "ADJUST_ON",
	"title": "Frontier Resources Ltd"
}, {
	"code": "FNX",
	"status": "ADJUST_ON",
	"title": "Finexia Financial Group Ltd"
}, {
	"code": "FOD",
	"status": "ADJUST_ON",
	"title": "The Food Revolution Group Ltd"
}, {
	"code": "FOOD",
	"status": "ADJUST_ON",
	"title": "Betashares Global Agriculture ETF - Currency Hedged"
}, {
	"code": "FOR",
	"status": "ADJUST_ON",
	"title": "Forager Australian Shares Fund"
}, {
	"code": "FPC",
	"status": "ADJUST_ON",
	"title": "Fat Prophets Global Contrarian Fund Ltd"
}, {
	"code": "FPH",
	"status": "ADJUST_ON",
	"title": "Fisher & Paykel Healthcare Corporation Ltd"
}, {
	"code": "FPL",
	"status": "ADJUST_ON",
	"title": "Fremont Petroleum Corporation Ltd"
}, {
	"code": "FPP",
	"status": "ADJUST_ON",
	"title": "Fat Prophets Global Property Fund"
}, {
	"code": "FRB",
	"status": "ADJUST_ON",
	"title": "Firebird Metals Ltd"
}, {
	"code": "FRI",
	"status": "ADJUST_ON",
	"title": "Finbar Group Ltd"
}, {
	"code": "FRM",
	"status": "ADJUST_ON",
	"title": "Farm Pride Foods Ltd"
}, {
	"code": "FRX",
	"status": "ADJUST_ON",
	"title": "Flexiroam Ltd"
}, {
	"code": "FSA",
	"status": "ADJUST_ON",
	"title": "FSA Group Ltd"
}, {
	"code": "FSF",
	"status": "ADJUST_ON",
	"title": "Fonterra Shareholders' Fund"
}, {
	"code": "FSG",
	"status": "ADJUST_ON",
	"title": "Field Solutions Holdings Ltd"
}, {
	"code": "FSI",
	"status": "ADJUST_ON",
	"title": "Flagship Investments Ltd"
}, {
	"code": "FTC",
	"status": "ADJUST_ON",
	"title": "Fintech Chain Ltd"
}, {
	"code": "FTT",
	"status": "SUSPEND",
	"title": "Factor Therapeutics Ltd"
}, {
	"code": "FTZ",
	"status": "ADJUST_ON",
	"title": "Fertoz Ltd"
}, {
	"code": "FUEL",
	"status": "ADJUST_ON",
	"title": "Betashares Global Energy Companies ETF - Currency Hedged"
}, {
	"code": "FUN",
	"status": "ADJUST_ON",
	"title": "Funtastic Ltd"
}, {
	"code": "FWD",
	"status": "ADJUST_ON",
	"title": "Fleetwood Ltd"
}, {
	"code": "FYI",
	"status": "ADJUST_ON",
	"title": "FYI Resources Ltd"
}, {
	"code": "FZO",
	"status": "ADJUST_ON",
	"title": "Family ZONE Cyber Safety Ltd"
}, {
	"code": "FZR",
	"status": "ADJUST_ON",
	"title": "Fitzroy River Corporation Ltd"
}, {
	"code": "G1A",
	"status": "ADJUST_ON",
	"title": "Galena Mining Ltd"
}, {
	"code": "G88",
	"status": "ADJUST_ON",
	"title": "Golden Mile Resources Ltd"
}, {
	"code": "GAL",
	"status": "ADJUST_ON",
	"title": "Galileo Mining Ltd"
}, {
	"code": "GAP",
	"status": "ADJUST_ON",
	"title": "Gale Pacific Ltd"
}, {
	"code": "GAS",
	"status": "ADJUST_ON",
	"title": "State GAS Ltd"
}, {
	"code": "GBE",
	"status": "ADJUST_ON",
	"title": "Globe Metals & Mining Ltd"
}, {
	"code": "GBND",
	"status": "ADJUST_ON",
	"title": "Betashares Sustainability Leaders DVRSFD Bond ETF - Cur HDG"
}, {
	"code": "GBR",
	"status": "ADJUST_ON",
	"title": "Great Boulder Resources Ltd"
}, {
	"code": "GBZ",
	"status": "ADJUST_ON",
	"title": "GBM Resources Ltd"
}, {
	"code": "GC1",
	"status": "ADJUST_ON",
	"title": "Glennon Small Companies Ltd"
}, {
	"code": "GCI",
	"status": "ADJUST_ON",
	"title": "Gryphon Capital Income Trust"
}, {
	"code": "GCR",
	"status": "SUSPEND",
	"title": "Golden Cross Resources Ltd"
}, {
	"code": "GCY",
	"status": "ADJUST_ON",
	"title": "Gascoyne Resources Ltd"
}, {
	"code": "GDA",
	"status": "ADJUST_ON",
	"title": "Good Drinks Australia Ltd"
}, {
	"code": "GDC",
	"status": "ADJUST_ON",
	"title": "Global Data Centre Group"
}, {
	"code": "GDF",
	"status": "ADJUST_ON",
	"title": "Garda Property Group"
}, {
	"code": "GDG",
	"status": "ADJUST_ON",
	"title": "Generation Development Group Ltd"
}, {
	"code": "GDI",
	"status": "ADJUST_ON",
	"title": "GDI Property Group"
}, {
	"code": "GDX",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Gold Miners ETF"
}, {
	"code": "GEAR",
	"status": "ADJUST_ON",
	"title": "Betashares Geared Australian Equity Fund (Hedge Fund)"
}, {
	"code": "GED",
	"status": "ADJUST_ON",
	"title": "Golden Deeps Ltd"
}, {
	"code": "GEM",
	"status": "ADJUST_ON",
	"title": "G8 Education Ltd"
}, {
	"code": "GEN",
	"status": "ADJUST_ON",
	"title": "Genmin Ltd"
}, {
	"code": "GES",
	"status": "ADJUST_ON",
	"title": "Genesis Resources Ltd"
}, {
	"code": "GEV",
	"status": "ADJUST_ON",
	"title": "Global Energy Ventures Ltd"
}, {
	"code": "GFL",
	"status": "ADJUST_ON",
	"title": "Global Masters Fund Ltd"
}, {
	"code": "GGE",
	"status": "ADJUST_ON",
	"title": "Grand Gulf Energy Ltd"
}, {
	"code": "GGG",
	"status": "ADJUST_ON",
	"title": "Greenland Minerals Ltd"
}, {
	"code": "GGOV",
	"status": "ADJUST_ON",
	"title": "Betashares Global Government Bond 20+ Year ETF - Cur Hedged"
}, {
	"code": "GGUS",
	"status": "ADJUST_ON",
	"title": "Betashares Geared US Equity Fund Currency Hedged (Hedgefund)"
}, {
	"code": "GGX",
	"status": "ADJUST_ON",
	"title": "GAS2GRID Ltd"
}, {
	"code": "GIB",
	"status": "ADJUST_ON",
	"title": "Gibb River Diamonds Ltd"
}, {
	"code": "GL1",
	"status": "ADJUST_ON",
	"title": "Global Lithium Resources Ltd"
}, {
	"code": "GLA",
	"status": "ADJUST_ON",
	"title": "Gladiator Resources Ltd"
}, {
	"code": "GLB",
	"status": "ADJUST_ON",
	"title": "Globe International Ltd"
}, {
	"code": "GLE",
	"status": "ADJUST_ON",
	"title": "GLG Corp Ltd"
}, {
	"code": "GLH",
	"status": "ADJUST_ON",
	"title": "Global Health Ltd"
}, {
	"code": "GLL",
	"status": "ADJUST_ON",
	"title": "Galilee Energy Ltd"
}, {
	"code": "GLN",
	"status": "ADJUST_ON",
	"title": "Galan Lithium Ltd"
}, {
	"code": "GLV",
	"status": "ADJUST_ON",
	"title": "Global Oil & Gas Ltd"
}, {
	"code": "GMA",
	"status": "ADJUST_ON",
	"title": "Genworth Mortgage Insurance Australia Ltd"
}, {
	"code": "GMC",
	"status": "SUSPEND",
	"title": "Gulf Manganese Corporation Ltd"
}, {
	"code": "GMD",
	"status": "ADJUST_ON",
	"title": "Genesis Minerals Ltd"
}, {
	"code": "GME",
	"status": "ADJUST_ON",
	"title": "GME Resources Ltd"
}, {
	"code": "GMG",
	"status": "ADJUST_ON",
	"title": "Goodman Group"
}, {
	"code": "GML",
	"status": "ADJUST_ON",
	"title": "Gateway Mining Ltd"
}, {
	"code": "GMN",
	"status": "ADJUST_ON",
	"title": "Gold Mountain Ltd"
}, {
	"code": "GMR",
	"status": "ADJUST_ON",
	"title": "Golden Rim Resources Ltd"
}, {
	"code": "GNC",
	"status": "ADJUST_ON",
	"title": "Graincorp Ltd"
}, {
	"code": "GNE",
	"status": "ADJUST_ON",
	"title": "Genesis Energy Ltd"
}, {
	"code": "GNG",
	"status": "ADJUST_ON",
	"title": "GR Engineering Services Ltd"
}, {
	"code": "GNM",
	"status": "ADJUST_ON",
	"title": "Great Northern Minerals Ltd"
}, {
	"code": "GNMNF",
	"status": "SUSPEND",
	"title": "Great Northern Minerals Ltd"
}, {
	"code": "GNP",
	"status": "ADJUST_ON",
	"title": "Genusplus Group Ltd"
}, {
	"code": "GNX",
	"status": "ADJUST_ON",
	"title": "GENEX Power Ltd"
}, {
	"code": "GO2",
	"status": "ADJUST_ON",
	"title": "The GO2 People Ltd"
}, {
	"code": "GOAT",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Morningstar World Ex Australia Wide Moat ETF"
}, {
	"code": "GOLD",
	"status": "ADJUST_ON",
	"title": "ETFs Metal Securities Australia Ltd"
}, {
	"code": "GOO",
	"status": "SUSPEND",
	"title": "Gooroo Ventures Ltd"
}, {
	"code": "GOR",
	"status": "ADJUST_ON",
	"title": "Gold Road Resources Ltd"
}, {
	"code": "GOVT",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX Australian Government Bond Fund"
}, {
	"code": "GOW",
	"status": "ADJUST_ON",
	"title": "Gowing Bros Ltd"
}, {
	"code": "GOZ",
	"status": "ADJUST_ON",
	"title": "Growthpoint Properties Australia"
}, {
	"code": "GPR",
	"status": "ADJUST_ON",
	"title": "Geopacific Resources Ltd"
}, {
	"code": "GPS",
	"status": "ADJUST_ON",
	"title": "GPS Alliance Holdings Ltd"
}, {
	"code": "GPT",
	"status": "ADJUST_ON",
	"title": "GPT Group"
}, {
	"code": "GRL",
	"status": "ADJUST_ON",
	"title": "Godolphin Resources Ltd"
}, {
	"code": "GRNV",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI Australian Sustainable Equity ETF"
}, {
	"code": "GROW",
	"status": "ADJUST_ON",
	"title": "Schroder Real Return (Managed Fund)"
}, {
	"code": "GRR",
	"status": "ADJUST_ON",
	"title": "Grange Resources Ltd"
}, {
	"code": "GRV",
	"status": "ADJUST_ON",
	"title": "Greenvale Mining Ltd"
}, {
	"code": "GSM",
	"status": "ADJUST_ON",
	"title": "Golden State Mining Ltd"
}, {
	"code": "GSN",
	"status": "ADJUST_ON",
	"title": "Great Southern Mining Ltd"
}, {
	"code": "GSS",
	"status": "ADJUST_ON",
	"title": "Genetic Signatures Ltd"
}, {
	"code": "GTE",
	"status": "ADJUST_ON",
	"title": "Great Western Exploration Ltd"
}, {
	"code": "GTG",
	"status": "ADJUST_ON",
	"title": "Genetic Technologies Ltd"
}, {
	"code": "GTK",
	"status": "ADJUST_ON",
	"title": "Gentrack Group Ltd"
}, {
	"code": "GTN",
	"status": "ADJUST_ON",
	"title": "GTN Ltd"
}, {
	"code": "GTR",
	"status": "ADJUST_ON",
	"title": "Gti Resources Ltd"
}, {
	"code": "GUD",
	"status": "ADJUST_ON",
	"title": "G.U.D. Holdings Ltd"
}, {
	"code": "GUL",
	"status": "ADJUST_ON",
	"title": "Gullewa Ltd"
}, {
	"code": "GVF",
	"status": "ADJUST_ON",
	"title": "Global Value Fund Ltd"
}, {
	"code": "GWA",
	"status": "ADJUST_ON",
	"title": "GWA Group Ltd"
}, {
	"code": "GWR",
	"status": "ADJUST_ON",
	"title": "GWR Group Ltd"
}, {
	"code": "GXY",
	"status": "ADJUST_ON",
	"title": "Galaxy Resources Ltd"
}, {
	"code": "HACK",
	"status": "ADJUST_ON",
	"title": "Betashares Global Cybersecurity ETF"
}, {
	"code": "HAS",
	"status": "ADJUST_ON",
	"title": "Hastings Technology Metals Ltd"
}, {
	"code": "HAV",
	"status": "ADJUST_ON",
	"title": "Havilah Resources Ltd"
}, {
	"code": "HAW",
	"status": "ADJUST_ON",
	"title": "Hawthorn Resources Ltd"
}, {
	"code": "HBRD",
	"status": "ADJUST_ON",
	"title": "Betashares Active Australian Hybrids Fund (Managed Fund)"
}, {
	"code": "HCD",
	"status": "ADJUST_ON",
	"title": "Hydrocarbon Dynamics Ltd"
}, {
	"code": "HCH",
	"status": "ADJUST_ON",
	"title": "Hot Chili Ltd"
}, {
	"code": "HCT",
	"status": "ADJUST_ON",
	"title": "Holista Colltech Ltd"
}, {
	"code": "HDN",
	"status": "ADJUST_ON",
	"title": "Homeco Daily Needs REIT"
}, {
	"code": "HE8",
	"status": "ADJUST_ON",
	"title": "Helios Energy Ltd"
}, {
	"code": "HETH",
	"status": "ADJUST_ON",
	"title": "Betashares Global Sustainability Leaders ETF - CH"
}, {
	"code": "HEUR",
	"status": "ADJUST_ON",
	"title": "Betashares Europe ETF-Currency Hedged"
}, {
	"code": "HFR",
	"status": "ADJUST_ON",
	"title": "Highfield Resources Ltd"
}, {
	"code": "HFY",
	"status": "ADJUST_ON",
	"title": "Hubify Ltd"
}, {
	"code": "HGH",
	"status": "ADJUST_ON",
	"title": "Heartland Group Holdings Ltd"
}, {
	"code": "HGL",
	"status": "ADJUST_ON",
	"title": "Hudson Investment Group Ltd"
}, {
	"code": "HGM",
	"status": "SUSPEND",
	"title": "High Grade Metals Ltd"
}, {
	"code": "HGO",
	"status": "ADJUST_ON",
	"title": "Hillgrove Resources Ltd"
}, {
	"code": "HHI",
	"status": "ADJUST_ON",
	"title": "Health House International Ltd"
}, {
	"code": "HHM",
	"status": "SUSPEND",
	"title": "Hampton Hill Mining NL"
}, {
	"code": "HHY",
	"status": "SUSPEND",
	"title": "HHY Fund"
}, {
	"code": "HIL",
	"status": "ADJUST_ON",
	"title": "Hills Ltd"
}, {
	"code": "HIT",
	"status": "ADJUST_ON",
	"title": "Hitech Group Australia Ltd"
}, {
	"code": "HJPN",
	"status": "ADJUST_ON",
	"title": "Betashares Japan ETF-Currency Hedged"
}, {
	"code": "HLA",
	"status": "ADJUST_ON",
	"title": "Healthia Ltd"
}, {
	"code": "HLO",
	"status": "ADJUST_ON",
	"title": "Helloworld Travel Ltd"
}, {
	"code": "HLS",
	"status": "ADJUST_ON",
	"title": "Healius Ltd"
}, {
	"code": "HLTH",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Global Healthcare Leaders ETF"
}, {
	"code": "HLX",
	"status": "ADJUST_ON",
	"title": "HELIX Resources Ltd"
}, {
	"code": "HM1",
	"status": "ADJUST_ON",
	"title": "Hearts and Minds Investments Ltd"
}, {
	"code": "HMC",
	"status": "ADJUST_ON",
	"title": "Home Consortium"
}, {
	"code": "HMD",
	"status": "ADJUST_ON",
	"title": "Heramed Ltd"
}, {
	"code": "HMX",
	"status": "ADJUST_ON",
	"title": "Hammer Metals Ltd"
}, {
	"code": "HMY",
	"status": "ADJUST_ON",
	"title": "Harmoney Corp Ltd"
}, {
	"code": "HNDQ",
	"status": "ADJUST_ON",
	"title": "Betashares Nasdaq 100 ETF - Currency Hedged"
}, {
	"code": "HNG",
	"status": "ADJUST_ON",
	"title": "HGL Ltd"
}, {
	"code": "HNR",
	"status": "ADJUST_ON",
	"title": "Hannans Ltd"
}, {
	"code": "HOR",
	"status": "SUSPEND",
	"title": "Horseshoe Metals Ltd"
}, {
	"code": "HPG",
	"status": "ADJUST_ON",
	"title": "Hipages Group Holdings Ltd"
}, {
	"code": "HPI",
	"status": "ADJUST_ON",
	"title": "Hotel Property Investments"
}, {
	"code": "HPP",
	"status": "ADJUST_ON",
	"title": "Health and Plant Protein Group Ltd"
}, {
	"code": "HPR",
	"status": "ADJUST_ON",
	"title": "High Peak Royalties Ltd"
}, {
	"code": "HQLT",
	"status": "ADJUST_ON",
	"title": "Betashares Global Quality Leaders ETF Currency Hedged"
}, {
	"code": "HRL",
	"status": "ADJUST_ON",
	"title": "HRL Holdings Ltd"
}, {
	"code": "HRN",
	"status": "ADJUST_ON",
	"title": "Horizon Gold Ltd"
}, {
	"code": "HRR",
	"status": "ADJUST_ON",
	"title": "Heron Resources Ltd"
}, {
	"code": "HRZ",
	"status": "ADJUST_ON",
	"title": "Horizon Minerals Ltd"
}, {
	"code": "HSC",
	"status": "ADJUST_ON",
	"title": "HSC Technology Group Ltd"
}, {
	"code": "HSN",
	"status": "ADJUST_ON",
	"title": "Hansen Technologies Ltd"
}, {
	"code": "HT1",
	"status": "ADJUST_ON",
	"title": "HT&E Ltd"
}, {
	"code": "HT8",
	"status": "ADJUST_ON",
	"title": "Harris Technology Group Ltd"
}, {
	"code": "HTA",
	"status": "ADJUST_ON",
	"title": "Hutchison Telecommunications (Australia) Ltd"
}, {
	"code": "HTG",
	"status": "ADJUST_ON",
	"title": "Harvest Technology Group Ltd"
}, {
	"code": "HUB",
	"status": "ADJUST_ON",
	"title": "HUB24 Ltd"
}, {
	"code": "HUM",
	"status": "ADJUST_ON",
	"title": "Humm Group Ltd"
}, {
	"code": "HUO",
	"status": "ADJUST_ON",
	"title": "Huon Aquaculture Group Ltd"
}, {
	"code": "HVM",
	"status": "ADJUST_ON",
	"title": "Happy Valley Nutrition Ltd"
}, {
	"code": "HVN",
	"status": "ADJUST_ON",
	"title": "Harvey Norman Holdings Ltd"
}, {
	"code": "HVST",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Dividend Harvester Fund (Managed Fund)"
}, {
	"code": "HWH",
	"status": "ADJUST_ON",
	"title": "Houston We Have Ltd"
}, {
	"code": "HWK",
	"status": "ADJUST_ON",
	"title": "Hawkstone Mining Ltd"
}, {
	"code": "HXG",
	"status": "ADJUST_ON",
	"title": "Hexagon Energy Materials Ltd"
}, {
	"code": "HXL",
	"status": "ADJUST_ON",
	"title": "Hexima Ltd"
}, {
	"code": "HYD",
	"status": "ADJUST_ON",
	"title": "HYDRIX Ltd"
}, {
	"code": "HYGG",
	"status": "ADJUST_ON",
	"title": "Hyperion GBL Growth Companies Fund (Managed Fund)"
}, {
	"code": "HYM",
	"status": "ADJUST_ON",
	"title": "Hyperion Metals Ltd"
}, {
	"code": "HZN",
	"status": "ADJUST_ON",
	"title": "Horizon Oil Ltd"
}, {
	"code": "HZR",
	"status": "ADJUST_ON",
	"title": "HAZER Group Ltd"
}, {
	"code": "IAA",
	"status": "ADJUST_ON",
	"title": "Ishares Asia 50 ETF"
}, {
	"code": "IAF",
	"status": "ADJUST_ON",
	"title": "Ishares Core Composite Bond ETF"
}, {
	"code": "IAG",
	"status": "ADJUST_ON",
	"title": "Insurance Australia Group Ltd"
}, {
	"code": "IAP",
	"status": "ADJUST_ON",
	"title": "Irongate Group"
}, {
	"code": "IBC",
	"status": "ADJUST_ON",
	"title": "Ironbark Capital Ltd"
}, {
	"code": "IBG",
	"status": "ADJUST_ON",
	"title": "Ironbark ZINC Ltd"
}, {
	"code": "IBX",
	"status": "ADJUST_ON",
	"title": "Imagion Biosystems Ltd"
}, {
	"code": "ICE",
	"status": "ADJUST_ON",
	"title": "Icetana Ltd"
}, {
	"code": "ICG",
	"status": "ADJUST_ON",
	"title": "Inca Minerals Ltd"
}, {
	"code": "ICI",
	"status": "ADJUST_ON",
	"title": "Icandy Interactive Ltd"
}, {
	"code": "ICL",
	"status": "ADJUST_ON",
	"title": "Iceni Gold Ltd"
}, {
	"code": "ICN",
	"status": "ADJUST_ON",
	"title": "Icon Energy Ltd"
}, {
	"code": "ICOR",
	"status": "ADJUST_ON",
	"title": "Ishares Core Corporate Bond ETF"
}, {
	"code": "ICQ",
	"status": "ADJUST_ON",
	"title": "Icar Asia Ltd"
}, {
	"code": "ICR",
	"status": "ADJUST_ON",
	"title": "Intelicare Holdings Ltd"
}, {
	"code": "ICS",
	"status": "ADJUST_ON",
	"title": "Icsglobal Ltd"
}, {
	"code": "ICT",
	"status": "ADJUST_ON",
	"title": "Icollege Ltd"
}, {
	"code": "ID8",
	"status": "ADJUST_ON",
	"title": "Identitii Ltd"
}, {
	"code": "IDA",
	"status": "ADJUST_ON",
	"title": "Indiana Resources Ltd"
}, {
	"code": "IDT",
	"status": "ADJUST_ON",
	"title": "IDT Australia Ltd"
}, {
	"code": "IDX",
	"status": "ADJUST_ON",
	"title": "Integral Diagnostics Ltd"
}, {
	"code": "IDZ",
	"status": "ADJUST_ON",
	"title": "Indoor Skydive Australia Group Ltd"
}, {
	"code": "IEC",
	"status": "ADJUST_ON",
	"title": "Intra Energy Corporation Ltd"
}, {
	"code": "IEL",
	"status": "ADJUST_ON",
	"title": "Idp Education Ltd"
}, {
	"code": "IEM",
	"status": "ADJUST_ON",
	"title": "Ishares MSCI Emerging Markets ETF"
}, {
	"code": "IEQ",
	"status": "ADJUST_ON",
	"title": "International Equities Corporation Ltd"
}, {
	"code": "IEU",
	"status": "ADJUST_ON",
	"title": "Ishares Europe ETF"
}, {
	"code": "IFL",
	"status": "ADJUST_ON",
	"title": "IOOF Holdings Ltd"
}, {
	"code": "IFM",
	"status": "ADJUST_ON",
	"title": "Infomedia Ltd"
}, {
	"code": "IFRA",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Ftse Global Infrastructure (Hedged) ETF"
}, {
	"code": "IFT",
	"status": "ADJUST_ON",
	"title": "Infratil Ltd"
}, {
	"code": "IGB",
	"status": "ADJUST_ON",
	"title": "Ishares Treasury ETF"
}, {
	"code": "IGE",
	"status": "SUSPEND",
	"title": "Integrated Green Energy Solutions Ltd"
}, {
	"code": "IGL",
	"status": "ADJUST_ON",
	"title": "Ive Group Ltd"
}, {
	"code": "IGN",
	"status": "ADJUST_ON",
	"title": "Ignite Ltd"
}, {
	"code": "IGO",
	"status": "ADJUST_ON",
	"title": "IGO Ltd"
}, {
	"code": "IHCB",
	"status": "ADJUST_ON",
	"title": "Ishares Core Global Corporate Bond(Aud Hedged) ETF"
}, {
	"code": "IHD",
	"status": "ADJUST_ON",
	"title": "Ishares S&P\/ASX Dividend Opportunities ETF"
}, {
	"code": "IHEB",
	"status": "ADJUST_ON",
	"title": "Ishares J.P. Morgan Usd Emerging Markets (Aud Hedged) ETF"
}, {
	"code": "IHHY",
	"status": "ADJUST_ON",
	"title": "Ishares Global High Yield Bond (Aud Hedged) ETF"
}, {
	"code": "IHL",
	"status": "ADJUST_ON",
	"title": "Incannex Healthcare Ltd"
}, {
	"code": "IHOO",
	"status": "ADJUST_ON",
	"title": "Ishares Global 100 Aud Hedged ETF"
}, {
	"code": "IHR",
	"status": "ADJUST_ON",
	"title": "Intellihr Ltd"
}, {
	"code": "IHVV",
	"status": "ADJUST_ON",
	"title": "Ishares S&P 500 Aud Hedged ETF"
}, {
	"code": "IHWL",
	"status": "ADJUST_ON",
	"title": "Ishares Core MSCI World All Cap (Aud Hedged) ETF"
}, {
	"code": "IIGF",
	"status": "ADJUST_ON",
	"title": "Intelligent Investor Aus Equity Growth Fund (Managed Fund)"
}, {
	"code": "IIND",
	"status": "ADJUST_ON",
	"title": "Betashares India Quality ETF"
}, {
	"code": "IJH",
	"status": "ADJUST_ON",
	"title": "Ishares S&P Mid-Cap ETF"
}, {
	"code": "IJP",
	"status": "ADJUST_ON",
	"title": "Ishares MSCI Japan ETF"
}, {
	"code": "IJR",
	"status": "ADJUST_ON",
	"title": "Ishares S&P Small-Cap ETF"
}, {
	"code": "IKE",
	"status": "ADJUST_ON",
	"title": "Ikegps Group Ltd"
}, {
	"code": "IKO",
	"status": "ADJUST_ON",
	"title": "Ishares MSCI South Korea ETF"
}, {
	"code": "IKW",
	"status": "ADJUST_ON",
	"title": "Ikwezi Mining Ltd"
}, {
	"code": "ILA",
	"status": "ADJUST_ON",
	"title": "Island Pharmaceuticals Ltd"
}, {
	"code": "ILB",
	"status": "ADJUST_ON",
	"title": "Ishares Government Inflation ETF"
}, {
	"code": "ILC",
	"status": "ADJUST_ON",
	"title": "Ishares S&P\/ASX 20 ETF"
}, {
	"code": "ILU",
	"status": "ADJUST_ON",
	"title": "Iluka Resources Ltd"
}, {
	"code": "IMA",
	"status": "ADJUST_ON",
	"title": "Image Resources NL"
}, {
	"code": "IMC",
	"status": "ADJUST_ON",
	"title": "Immuron Ltd"
}, {
	"code": "IMD",
	"status": "ADJUST_ON",
	"title": "IMDEX Ltd"
}, {
	"code": "IME",
	"status": "ADJUST_ON",
	"title": "Imexhs Ltd"
}, {
	"code": "IMM",
	"status": "ADJUST_ON",
	"title": "Immutep Ltd"
}, {
	"code": "IMPQ",
	"status": "ADJUST_ON",
	"title": "Einvest Better Future Fund (Managed Fund)"
}, {
	"code": "IMR",
	"status": "ADJUST_ON",
	"title": "Imricor Medical Systems, Inc"
}, {
	"code": "IMS",
	"status": "SUSPEND",
	"title": "Impelus Ltd"
}, {
	"code": "IMU",
	"status": "ADJUST_ON",
	"title": "Imugene Ltd"
}, {
	"code": "INA",
	"status": "ADJUST_ON",
	"title": "Ingenia Communities Group"
}, {
	"code": "INCM",
	"status": "ADJUST_ON",
	"title": "Betashares Global Income Leaders ETF"
}, {
	"code": "INES",
	"status": "ADJUST_ON",
	"title": "Intelligent Investor Ethical Share Fund (Managed Fund)"
}, {
	"code": "INF",
	"status": "SUSPEND",
	"title": "Infinity Lithium Corporation Ltd"
}, {
	"code": "ING",
	"status": "ADJUST_ON",
	"title": "Inghams Group Ltd"
}, {
	"code": "INIF",
	"status": "ADJUST_ON",
	"title": "Intelligent Investor Aus Equity Income Fund (Managed Fund)"
}, {
	"code": "INP",
	"status": "ADJUST_ON",
	"title": "Incentiapay Ltd"
}, {
	"code": "INR",
	"status": "ADJUST_ON",
	"title": "Ioneer Ltd"
}, {
	"code": "INV",
	"status": "ADJUST_ON",
	"title": "Investsmart Group Ltd"
}, {
	"code": "IOD",
	"status": "ADJUST_ON",
	"title": "Iodm Ltd"
}, {
	"code": "IOO",
	"status": "ADJUST_ON",
	"title": "Ishares Global 100 ETF"
}, {
	"code": "IOU",
	"status": "ADJUST_ON",
	"title": "Ioupay Ltd"
}, {
	"code": "IOZ",
	"status": "ADJUST_ON",
	"title": "Ishares Core S&P\/ASX 200 ETF"
}, {
	"code": "IP1",
	"status": "ADJUST_ON",
	"title": "Integrated Payment Technologies Ltd"
}, {
	"code": "IPB",
	"status": "ADJUST_ON",
	"title": "IPB Petroleum Ltd"
}, {
	"code": "IPC",
	"status": "ADJUST_ON",
	"title": "Imperial Pacific Ltd"
}, {
	"code": "IPD",
	"status": "ADJUST_ON",
	"title": "Impedimed Ltd"
}, {
	"code": "IPH",
	"status": "ADJUST_ON",
	"title": "IPH Ltd"
}, {
	"code": "IPL",
	"status": "ADJUST_ON",
	"title": "Incitec Pivot Ltd"
}, {
	"code": "IPT",
	"status": "ADJUST_ON",
	"title": "Impact Minerals Ltd"
}, {
	"code": "IQ3",
	"status": "ADJUST_ON",
	"title": "IQ3CORP Ltd"
}, {
	"code": "IRD",
	"status": "ADJUST_ON",
	"title": "Iron Road Ltd"
}, {
	"code": "IRE",
	"status": "ADJUST_ON",
	"title": "Iress Ltd"
}, {
	"code": "IRI",
	"status": "ADJUST_ON",
	"title": "Integrated Research Ltd"
}, {
	"code": "IS3",
	"status": "ADJUST_ON",
	"title": "I Synergy Group Ltd"
}, {
	"code": "ISD",
	"status": "ADJUST_ON",
	"title": "Isentia Group Ltd"
}, {
	"code": "ISEC",
	"status": "ADJUST_ON",
	"title": "Ishares Enhanced Cash ETF"
}, {
	"code": "ISO",
	"status": "ADJUST_ON",
	"title": "Ishares S&P\/ASX Small Ordinaries ETF"
}, {
	"code": "ISU",
	"status": "ADJUST_ON",
	"title": "Iselect Ltd"
}, {
	"code": "ISX",
	"status": "SUSPEND",
	"title": "Isignthis Ltd"
}, {
	"code": "ITG",
	"status": "ADJUST_ON",
	"title": "Intega Group Ltd"
}, {
	"code": "IVC",
	"status": "ADJUST_ON",
	"title": "Invocare Ltd"
}, {
	"code": "IVE",
	"status": "ADJUST_ON",
	"title": "Ishares MSCI Eafe ETF"
}, {
	"code": "IVO",
	"status": "SUSPEND",
	"title": "Invigor Group Ltd"
}, {
	"code": "IVR",
	"status": "ADJUST_ON",
	"title": "Investigator Resources Ltd"
}, {
	"code": "IVT",
	"status": "ADJUST_ON",
	"title": "Inventis Ltd"
}, {
	"code": "IVV",
	"status": "ADJUST_ON",
	"title": "Ishares S&P 500 ETF"
}, {
	"code": "IVX",
	"status": "ADJUST_ON",
	"title": "Invion Ltd"
}, {
	"code": "IVZ",
	"status": "ADJUST_ON",
	"title": "Invictus Energy Ltd"
}, {
	"code": "IWLD",
	"status": "ADJUST_ON",
	"title": "Ishares Core MSCI World All Cap ETF"
}, {
	"code": "IXC",
	"status": "ADJUST_ON",
	"title": "INVEX Therapeutics Ltd"
}, {
	"code": "IXI",
	"status": "ADJUST_ON",
	"title": "Ishares Global Consumer Staples ETF"
}, {
	"code": "IXJ",
	"status": "ADJUST_ON",
	"title": "Ishares Global Healthcare ETF"
}, {
	"code": "IXR",
	"status": "ADJUST_ON",
	"title": "Ionic Rare EARTHS Ltd"
}, {
	"code": "IXU",
	"status": "ADJUST_ON",
	"title": "Ixup Ltd"
}, {
	"code": "IYLD",
	"status": "ADJUST_ON",
	"title": "Ishares Yield Plus ETF"
}, {
	"code": "IZZ",
	"status": "ADJUST_ON",
	"title": "Ishares China Large-Cap ETF"
}, {
	"code": "JAL",
	"status": "ADJUST_ON",
	"title": "Jameson Resources Ltd"
}, {
	"code": "JAN",
	"status": "ADJUST_ON",
	"title": "Janison Education Group Ltd"
}, {
	"code": "JAT",
	"status": "ADJUST_ON",
	"title": "Jatcorp Ltd"
}, {
	"code": "JAY",
	"status": "ADJUST_ON",
	"title": "Jayride Group Ltd"
}, {
	"code": "JBH",
	"status": "ADJUST_ON",
	"title": "JB Hi-Fi Ltd"
}, {
	"code": "JCS",
	"status": "ADJUST_ON",
	"title": "Jcurve Solutions Ltd"
}, {
	"code": "JDR",
	"status": "ADJUST_ON",
	"title": "Jadar Resources Ltd"
}, {
	"code": "JHC",
	"status": "ADJUST_ON",
	"title": "Japara Healthcare Ltd"
}, {
	"code": "JHG",
	"status": "ADJUST_ON",
	"title": "Janus Henderson Group Plc"
}, {
	"code": "JHL",
	"status": "ADJUST_ON",
	"title": "JAYEX Healthcare Ltd"
}, {
	"code": "JHX",
	"status": "ADJUST_ON",
	"title": "James Hardie Industries Plc"
}, {
	"code": "JIN",
	"status": "ADJUST_ON",
	"title": "Jumbo Interactive Ltd"
}, {
	"code": "JLG",
	"status": "ADJUST_ON",
	"title": "Johns LYNG Group Ltd"
}, {
	"code": "JMS",
	"status": "ADJUST_ON",
	"title": "Jupiter Mines Ltd"
}, {
	"code": "JPR",
	"status": "ADJUST_ON",
	"title": "Jupiter Energy Ltd"
}, {
	"code": "JRL",
	"status": "ADJUST_ON",
	"title": "Jindalee Resources Ltd"
}, {
	"code": "JRV",
	"status": "ADJUST_ON",
	"title": "Jervois Mining Ltd"
}, {
	"code": "JXT",
	"status": "ADJUST_ON",
	"title": "Jaxsta Ltd"
}, {
	"code": "JYC",
	"status": "ADJUST_ON",
	"title": "Joyce Corporation Ltd"
}, {
	"code": "K2F",
	"status": "ADJUST_ON",
	"title": "K2FLY Ltd"
}, {
	"code": "KAI",
	"status": "ADJUST_ON",
	"title": "Kairos Minerals Ltd"
}, {
	"code": "KAM",
	"status": "ADJUST_ON",
	"title": "K2 Asset Management Holdings Ltd"
}, {
	"code": "KAR",
	"status": "ADJUST_ON",
	"title": "Karoon Energy Ltd"
}, {
	"code": "KAT",
	"status": "ADJUST_ON",
	"title": "Katana Capital Ltd"
}, {
	"code": "KAU",
	"status": "ADJUST_ON",
	"title": "Kaiser Reef Ltd"
}, {
	"code": "KBC",
	"status": "ADJUST_ON",
	"title": "Keybridge Capital Ltd"
}, {
	"code": "KCC",
	"status": "ADJUST_ON",
	"title": "Kincora Copper Ltd"
}, {
	"code": "KCN",
	"status": "ADJUST_ON",
	"title": "Kingsgate Consolidated Ltd"
}, {
	"code": "KEY",
	"status": "ADJUST_ON",
	"title": "KEY Petroleum Ltd"
}, {
	"code": "KFE",
	"status": "ADJUST_ON",
	"title": "Kogi Iron Ltd"
}, {
	"code": "KFM",
	"status": "ADJUST_ON",
	"title": "Kingfisher Mining Ltd"
}, {
	"code": "KGD",
	"status": "ADJUST_ON",
	"title": "Kula Gold Ltd"
}, {
	"code": "KGL",
	"status": "ADJUST_ON",
	"title": "KGL Resources Ltd"
}, {
	"code": "KGM",
	"status": "SUSPEND",
	"title": "Kalnorth Gold Mines Ltd"
}, {
	"code": "KGN",
	"status": "ADJUST_ON",
	"title": "Kogan.com Ltd"
}, {
	"code": "KIN",
	"status": "ADJUST_ON",
	"title": "KIN Mining NL"
}, {
	"code": "KIS",
	"status": "ADJUST_ON",
	"title": "King Island Scheelite Ltd"
}, {
	"code": "KKC",
	"status": "ADJUST_ON",
	"title": "KKR Credit Income Fund"
}, {
	"code": "KKL",
	"status": "SUSPEND",
	"title": "Kollakorn Corporation Ltd"
}, {
	"code": "KKO",
	"status": "ADJUST_ON",
	"title": "Kinetiko Energy Ltd"
}, {
	"code": "KLA",
	"status": "ADJUST_ON",
	"title": "Kirkland Lake Gold Ltd"
}, {
	"code": "KLL",
	"status": "ADJUST_ON",
	"title": "Kalium Lakes Ltd"
}, {
	"code": "KLO",
	"status": "ADJUST_ON",
	"title": "Kingsland Global Ltd"
}, {
	"code": "KLR",
	"status": "ADJUST_ON",
	"title": "Kaili Resources Ltd"
}, {
	"code": "KMD",
	"status": "ADJUST_ON",
	"title": "Kathmandu Holdings Ltd"
}, {
	"code": "KME",
	"status": "ADJUST_ON",
	"title": "Kip Mcgrath Education Centres Ltd"
}, {
	"code": "KMT",
	"status": "ADJUST_ON",
	"title": "Kopore Metals Ltd"
}, {
	"code": "KNH",
	"status": "SUSPEND",
	"title": "Koon Holdings Ltd"
}, {
	"code": "KNM",
	"status": "ADJUST_ON",
	"title": "Kneomedia Ltd"
}, {
	"code": "KNO",
	"status": "ADJUST_ON",
	"title": "Knosys Ltd"
}, {
	"code": "KOR",
	"status": "ADJUST_ON",
	"title": "Korab Resources Ltd"
}, {
	"code": "KOV",
	"status": "ADJUST_ON",
	"title": "Korvest Ltd"
}, {
	"code": "KP2",
	"status": "ADJUST_ON",
	"title": "Kore Potash Plc"
}, {
	"code": "KPG",
	"status": "ADJUST_ON",
	"title": "Kelly Partners Group Holdings Ltd"
}, {
	"code": "KPO",
	"status": "ADJUST_ON",
	"title": "Kalina Power Ltd"
}, {
	"code": "KPT",
	"status": "ADJUST_ON",
	"title": "Kangaroo Island Plantation Timbers Ltd"
}, {
	"code": "KRM",
	"status": "ADJUST_ON",
	"title": "Kingsrose Mining Ltd"
}, {
	"code": "KRR",
	"status": "ADJUST_ON",
	"title": "King River Resources Ltd"
}, {
	"code": "KSC",
	"status": "ADJUST_ON",
	"title": "K & S Corporation Ltd"
}, {
	"code": "KSL",
	"status": "ADJUST_ON",
	"title": "Kina Securities Ltd"
}, {
	"code": "KSM",
	"status": "ADJUST_ON",
	"title": "K2 Australian Small Cap Fund (Hedge Fund)"
}, {
	"code": "KSN",
	"status": "ADJUST_ON",
	"title": "Kingston Resources Ltd"
}, {
	"code": "KSS",
	"status": "ADJUST_ON",
	"title": "Kleos Space S.A"
}, {
	"code": "KTA",
	"status": "ADJUST_ON",
	"title": "Krakatoa Resources Ltd"
}, {
	"code": "KTD",
	"status": "ADJUST_ON",
	"title": "Keytone Dairy Corporation Ltd"
}, {
	"code": "KTE",
	"status": "ADJUST_ON",
	"title": "K2 Energy Ltd"
}, {
	"code": "KTG",
	"status": "ADJUST_ON",
	"title": "K-Tig Ltd"
}, {
	"code": "KTGNB",
	"status": "ADJUST_ON",
	"title": "K-Tig Ltd"
}, {
	"code": "KWR",
	"status": "ADJUST_ON",
	"title": "Kingwest Resources Ltd"
}, {
	"code": "KYK",
	"status": "ADJUST_ON",
	"title": "KYCKR Ltd"
}, {
	"code": "KZA",
	"status": "ADJUST_ON",
	"title": "KAZIA Therapeutics Ltd"
}, {
	"code": "KZR",
	"status": "ADJUST_ON",
	"title": "Kalamazoo Resources Ltd"
}, {
	"code": "LAM",
	"status": "ADJUST_ON",
	"title": "Laramide Resources Ltd"
}, {
	"code": "LAU",
	"status": "ADJUST_ON",
	"title": "Lindsay Australia Ltd"
}, {
	"code": "LAW",
	"status": "ADJUST_ON",
	"title": "Lawfinance Ltd"
}, {
	"code": "LBL",
	"status": "ADJUST_ON",
	"title": "Laserbond Ltd"
}, {
	"code": "LBT",
	"status": "ADJUST_ON",
	"title": "LBT Innovations Ltd"
}, {
	"code": "LBY",
	"status": "ADJUST_ON",
	"title": "Laybuy Group Holdings Ltd"
}, {
	"code": "LCD",
	"status": "ADJUST_ON",
	"title": "Latitude Consolidated Ltd"
}, {
	"code": "LCE",
	"status": "ADJUST_ON",
	"title": "London City Equities Ltd"
}, {
	"code": "LCK",
	"status": "ADJUST_ON",
	"title": "Leigh Creek Energy Ltd"
}, {
	"code": "LCL",
	"status": "ADJUST_ON",
	"title": "Los Cerros Ltd"
}, {
	"code": "LCT",
	"status": "ADJUST_ON",
	"title": "Living Cell Technologies Ltd"
}, {
	"code": "LCY",
	"status": "ADJUST_ON",
	"title": "Legacy Iron Ore Ltd"
}, {
	"code": "LEG",
	"status": "ADJUST_ON",
	"title": "Legend Mining Ltd"
}, {
	"code": "LEP",
	"status": "ADJUST_ON",
	"title": "Ale Property Group"
}, {
	"code": "LER",
	"status": "ADJUST_ON",
	"title": "Leaf Resources Ltd"
}, {
	"code": "LEX",
	"status": "ADJUST_ON",
	"title": "Lefroy Exploration Ltd"
}, {
	"code": "LFG",
	"status": "ADJUST_ON",
	"title": "Liberty Financial Group"
}, {
	"code": "LFS",
	"status": "ADJUST_ON",
	"title": "Latitude Group Holdings Ltd"
}, {
	"code": "LGL",
	"status": "ADJUST_ON",
	"title": "Lynch Group Holdings Ltd"
}, {
	"code": "LGP",
	"status": "ADJUST_ON",
	"title": "Little Green Pharma Ltd"
}, {
	"code": "LHB",
	"status": "SUSPEND",
	"title": "Lionhub Group Ltd"
}, {
	"code": "LHM",
	"status": "ADJUST_ON",
	"title": "Land & Homes Group Ltd"
}, {
	"code": "LIC",
	"status": "ADJUST_ON",
	"title": "Lifestyle Communities Ltd"
}, {
	"code": "LIN",
	"status": "ADJUST_ON",
	"title": "Lindian Resources Ltd"
}, {
	"code": "LIO",
	"status": "ADJUST_ON",
	"title": "Lion Energy Ltd"
}, {
	"code": "LIT",
	"status": "ADJUST_ON",
	"title": "Lithium Australia NL"
}, {
	"code": "LITCF",
	"status": "ADJUST_ON",
	"title": "Lithium Australia NL"
}, {
	"code": "LKE",
	"status": "ADJUST_ON",
	"title": "Lake Resources N.L."
}, {
	"code": "LKO",
	"status": "SUSPEND",
	"title": "Lakes Blue Energy NL"
}, {
	"code": "LLC",
	"status": "ADJUST_ON",
	"title": "Lendlease Group"
}, {
	"code": "LLO",
	"status": "ADJUST_ON",
	"title": "Lion One Metals Ltd"
}, {
	"code": "LME",
	"status": "ADJUST_ON",
	"title": "Limeade, Inc"
}, {
	"code": "LMG",
	"status": "ADJUST_ON",
	"title": "Latrobe Magnesium Ltd"
}, {
	"code": "LML",
	"status": "SUSPEND",
	"title": "Lincoln Minerals Ltd"
}, {
	"code": "LNAS",
	"status": "ADJUST_ON",
	"title": "ETFs Ultra Long Nasdaq 100 Hedge Fund"
}, {
	"code": "LNK",
	"status": "ADJUST_ON",
	"title": "Link Administration Holdings Ltd"
}, {
	"code": "LNU",
	"status": "ADJUST_ON",
	"title": "Linius Technologies Ltd"
}, {
	"code": "LNY",
	"status": "ADJUST_ON",
	"title": "Laneway Resources Ltd"
}, {
	"code": "LOM",
	"status": "ADJUST_ON",
	"title": "Lucapa Diamond Company Ltd"
}, {
	"code": "LOT",
	"status": "ADJUST_ON",
	"title": "Lotus Resources Ltd"
}, {
	"code": "LOV",
	"status": "ADJUST_ON",
	"title": "Lovisa Holdings Ltd"
}, {
	"code": "LPD",
	"status": "ADJUST_ON",
	"title": "Lepidico Ltd"
}, {
	"code": "LPE",
	"status": "ADJUST_ON",
	"title": "Locality Planning Energy Holdings Ltd"
}, {
	"code": "LPGD",
	"status": "ADJUST_ON",
	"title": "Loftus Peak Global Disruption Fund (Managed Fund)"
}, {
	"code": "LPI",
	"status": "ADJUST_ON",
	"title": "Lithium Power International Ltd"
}, {
	"code": "LRK",
	"status": "ADJUST_ON",
	"title": "Lark Distilling Co. Ltd"
}, {
	"code": "LRS",
	"status": "ADJUST_ON",
	"title": "Latin Resources Ltd"
}, {
	"code": "LRT",
	"status": "ADJUST_ON",
	"title": "Lowell Resources Fund"
}, {
	"code": "LSA",
	"status": "ADJUST_ON",
	"title": "Lachlan Star Ltd"
}, {
	"code": "LSF",
	"status": "ADJUST_ON",
	"title": "L1 Long Short Fund Ltd"
}, {
	"code": "LSH",
	"status": "ADJUST_ON",
	"title": "Lifespot Health Ltd"
}, {
	"code": "LSR",
	"status": "ADJUST_ON",
	"title": "Lodestar Minerals Ltd"
}, {
	"code": "LSX",
	"status": "ADJUST_ON",
	"title": "Lion Selection Group Ltd"
}, {
	"code": "LTR",
	"status": "ADJUST_ON",
	"title": "Liontown Resources Ltd"
}, {
	"code": "LV1",
	"status": "ADJUST_ON",
	"title": "Live Verdure Ltd"
}, {
	"code": "LVE",
	"status": "ADJUST_ON",
	"title": "Love Group Global Ltd"
}, {
	"code": "LVH",
	"status": "ADJUST_ON",
	"title": "Livehire Ltd"
}, {
	"code": "LVT",
	"status": "ADJUST_ON",
	"title": "Livetiles Ltd"
}, {
	"code": "LYC",
	"status": "ADJUST_ON",
	"title": "Lynas Rare EARTHS Ltd"
}, {
	"code": "LYL",
	"status": "ADJUST_ON",
	"title": "Lycopodium Ltd"
}, {
	"code": "M24",
	"status": "ADJUST_ON",
	"title": "Mamba Exploration Ltd"
}, {
	"code": "M2R",
	"status": "ADJUST_ON",
	"title": "Miramar Resources Ltd"
}, {
	"code": "M7T",
	"status": "ADJUST_ON",
	"title": "MACH7 Technologies Ltd"
}, {
	"code": "M8S",
	"status": "ADJUST_ON",
	"title": "M8 Sustainable Ltd"
}, {
	"code": "MA1",
	"status": "ADJUST_ON",
	"title": "Monash Absolute Investment Company Ltd"
}, {
	"code": "MAD",
	"status": "ADJUST_ON",
	"title": "Mader Group Ltd"
}, {
	"code": "MAET",
	"status": "ADJUST_ON",
	"title": "Munro Global Growth Fund (Hedge Fund)"
}, {
	"code": "MAG",
	"status": "ADJUST_ON",
	"title": "Magmatic Resources Ltd"
}, {
	"code": "MAH",
	"status": "ADJUST_ON",
	"title": "Macmahon Holdings Ltd"
}, {
	"code": "MAI",
	"status": "ADJUST_ON",
	"title": "Mainstream Group Holdings Ltd"
}, {
	"code": "MAM",
	"status": "ADJUST_ON",
	"title": "Microequities Asset Management Group Ltd"
}, {
	"code": "MAN",
	"status": "ADJUST_ON",
	"title": "Mandrake Resources Ltd"
}, {
	"code": "MAQ",
	"status": "ADJUST_ON",
	"title": "Macquarie Telecom Group Ltd"
}, {
	"code": "MAT",
	"status": "ADJUST_ON",
	"title": "Matsa Resources Ltd"
}, {
	"code": "MAU",
	"status": "ADJUST_ON",
	"title": "Magnetic Resources NL"
}, {
	"code": "MAUCA",
	"status": "ADJUST_ON",
	"title": "Magnetic Resources NL"
}, {
	"code": "MAX",
	"status": "SUSPEND",
	"title": "Millinium's Alternatives Fund"
}, {
	"code": "MAY",
	"status": "ADJUST_ON",
	"title": "Melbana Energy Ltd"
}, {
	"code": "MBH",
	"status": "ADJUST_ON",
	"title": "Maggie Beer Holdings Ltd"
}, {
	"code": "MBK",
	"status": "ADJUST_ON",
	"title": "Metal Bank Ltd"
}, {
	"code": "MBM",
	"status": "ADJUST_ON",
	"title": "Mobecom Ltd"
}, {
	"code": "MCA",
	"status": "ADJUST_ON",
	"title": "Murray Cod Australia Ltd"
}, {
	"code": "MCE",
	"status": "ADJUST_ON",
	"title": "Matrix Composites & Engineering Ltd"
}, {
	"code": "MCL",
	"status": "ADJUST_ON",
	"title": "Mighty Craft Ltd"
}, {
	"code": "MCM",
	"status": "ADJUST_ON",
	"title": "MC Mining Ltd"
}, {
	"code": "MCP",
	"status": "ADJUST_ON",
	"title": "Mcpherson's Ltd"
}, {
	"code": "MCR",
	"status": "ADJUST_ON",
	"title": "Mincor Resources NL"
}, {
	"code": "MCT",
	"status": "ADJUST_ON",
	"title": "Metalicity Ltd"
}, {
	"code": "MCX",
	"status": "ADJUST_ON",
	"title": "Mariner Corporation Ltd"
}, {
	"code": "MCY",
	"status": "ADJUST_ON",
	"title": "Mercury NZ Ltd"
}, {
	"code": "MDC",
	"status": "ADJUST_ON",
	"title": "Medlab Clinical Ltd"
}, {
	"code": "MDI",
	"status": "ADJUST_ON",
	"title": "Middle Island Resources Ltd"
}, {
	"code": "MDR",
	"status": "ADJUST_ON",
	"title": "Medadvisor Ltd"
}, {
	"code": "MDX",
	"status": "SUSPEND",
	"title": "Mindax Ltd"
}, {
	"code": "MEA",
	"status": "ADJUST_ON",
	"title": "Mcgrath Ltd"
}, {
	"code": "MEB",
	"status": "ADJUST_ON",
	"title": "Medibio Ltd"
}, {
	"code": "MEC",
	"status": "ADJUST_ON",
	"title": "Morphic Ethical Equities Fund Ltd"
}, {
	"code": "MEG",
	"status": "ADJUST_ON",
	"title": "Megado Gold Ltd"
}, {
	"code": "MEI",
	"status": "ADJUST_ON",
	"title": "Meteoric Resources NL"
}, {
	"code": "MEL",
	"status": "ADJUST_ON",
	"title": "Metgasco Ltd"
}, {
	"code": "MEM",
	"status": "ADJUST_ON",
	"title": "Memphasys Ltd"
}, {
	"code": "MEP",
	"status": "ADJUST_ON",
	"title": "Minotaur Exploration Ltd"
}, {
	"code": "MEU",
	"status": "ADJUST_ON",
	"title": "Marmota Ltd"
}, {
	"code": "MEY",
	"status": "ADJUST_ON",
	"title": "Marenica Energy Ltd"
}, {
	"code": "MEZ",
	"status": "ADJUST_ON",
	"title": "Meridian Energy Ltd"
}, {
	"code": "MFB",
	"status": "ADJUST_ON",
	"title": "My Food Bag Group Ltd"
}, {
	"code": "MFD",
	"status": "ADJUST_ON",
	"title": "Mayfield Childcare Ltd"
}, {
	"code": "MFF",
	"status": "ADJUST_ON",
	"title": "MFF Capital Investments Ltd"
}, {
	"code": "MFG",
	"status": "ADJUST_ON",
	"title": "Magellan Financial Group Ltd"
}, {
	"code": "MGF",
	"status": "ADJUST_ON",
	"title": "Magellan Global Fund"
}, {
	"code": "MGH",
	"status": "ADJUST_ON",
	"title": "Maas Group Holdings Ltd"
}, {
	"code": "MGL",
	"status": "ADJUST_ON",
	"title": "Magontec Ltd"
}, {
	"code": "MGOC",
	"status": "ADJUST_ON",
	"title": "Magellan Global Fund (Open Class) (Managed Fund)"
}, {
	"code": "MGR",
	"status": "ADJUST_ON",
	"title": "Mirvac Group"
}, {
	"code": "MGT",
	"status": "ADJUST_ON",
	"title": "Magnetite Mines Ltd"
}, {
	"code": "MGU",
	"status": "ADJUST_ON",
	"title": "Magnum Mining and Exploration Ltd"
}, {
	"code": "MGV",
	"status": "ADJUST_ON",
	"title": "Musgrave Minerals Ltd"
}, {
	"code": "MGX",
	"status": "ADJUST_ON",
	"title": "Mount Gibson Iron Ltd"
}, {
	"code": "MHC",
	"status": "ADJUST_ON",
	"title": "Manhattan Corporation Ltd"
}, {
	"code": "MHG",
	"status": "ADJUST_ON",
	"title": "Magellan Global Equities Fund Currency Hedged (Managed Fund)"
}, {
	"code": "MHH",
	"status": "ADJUST_ON",
	"title": "Magellan High Conviction Trust"
}, {
	"code": "MHI",
	"status": "ADJUST_ON",
	"title": "Merchant House International Ltd"
}, {
	"code": "MHJ",
	"status": "ADJUST_ON",
	"title": "Michael Hill International Ltd"
}, {
	"code": "MHK",
	"status": "ADJUST_ON",
	"title": "Metal Hawk Ltd"
}, {
	"code": "MICH",
	"status": "ADJUST_ON",
	"title": "Magellan Infrastructure Fund (Currency Hedged)(Managed Fund)"
}, {
	"code": "MIH",
	"status": "SUSPEND",
	"title": "MNC Media Investment Ltd"
}, {
	"code": "MIL",
	"status": "ADJUST_ON",
	"title": "Millennium Services Group Ltd"
}, {
	"code": "MIN",
	"status": "ADJUST_ON",
	"title": "Mineral Resources Ltd"
}, {
	"code": "MIO",
	"status": "ADJUST_ON",
	"title": "Macarthur Minerals Ltd"
}, {
	"code": "MIR",
	"status": "ADJUST_ON",
	"title": "Mirrabooka Investments Ltd"
}, {
	"code": "MIRNA",
	"status": "ADJUST_ON",
	"title": "Mirrabooka Investments Ltd"
}, {
	"code": "MKAX",
	"status": "ADJUST_ON",
	"title": "Montaka Global Extension Fund (Quoted Managed Hedge Fund)"
}, {
	"code": "MKG",
	"status": "ADJUST_ON",
	"title": "Mako Gold Ltd"
}, {
	"code": "MKL",
	"status": "ADJUST_ON",
	"title": "Mighty Kingdom Ltd"
}, {
	"code": "MKR",
	"status": "ADJUST_ON",
	"title": "Manuka Resources Ltd"
}, {
	"code": "MLD",
	"status": "ADJUST_ON",
	"title": "Maca Ltd"
}, {
	"code": "MLG",
	"status": "ADJUST_ON",
	"title": "MLG OZ Ltd"
}, {
	"code": "MLM",
	"status": "ADJUST_ON",
	"title": "Metallica Minerals Ltd"
}, {
	"code": "MLS",
	"status": "ADJUST_ON",
	"title": "Metals Australia Ltd"
}, {
	"code": "MLT",
	"status": "ADJUST_ON",
	"title": "Milton Corporation Ltd"
}, {
	"code": "MLX",
	"status": "ADJUST_ON",
	"title": "Metals X Ltd"
}, {
	"code": "MM8",
	"status": "ADJUST_ON",
	"title": "Medallion Metals Ltd"
}, {
	"code": "MME",
	"status": "ADJUST_ON",
	"title": "Moneyme Ltd"
}, {
	"code": "MMI",
	"status": "ADJUST_ON",
	"title": "Metro Mining Ltd"
}, {
	"code": "MMJ",
	"status": "ADJUST_ON",
	"title": "MMJ Group Holdings Ltd"
}, {
	"code": "MML",
	"status": "ADJUST_ON",
	"title": "Medusa Mining Ltd"
}, {
	"code": "MMM",
	"status": "ADJUST_ON",
	"title": "Marley Spoon AG"
}, {
	"code": "MMR",
	"status": "SUSPEND",
	"title": "Mec Resources Ltd"
}, {
	"code": "MMS",
	"status": "ADJUST_ON",
	"title": "Mcmillan Shakespeare Ltd"
}, {
	"code": "MNB",
	"status": "ADJUST_ON",
	"title": "Minbos Resources Ltd"
}, {
	"code": "MND",
	"status": "ADJUST_ON",
	"title": "Monadelphous Group Ltd"
}, {
	"code": "MNF",
	"status": "ADJUST_ON",
	"title": "MNF Group Ltd"
}, {
	"code": "MNRS",
	"status": "ADJUST_ON",
	"title": "Betashares Global Gold Miners ETF - Currency Hedged"
}, {
	"code": "MNS",
	"status": "ADJUST_ON",
	"title": "Magnis Energy Technologies Ltd"
}, {
	"code": "MNY",
	"status": "ADJUST_ON",
	"title": "MONEY3 Corporation Ltd"
}, {
	"code": "MOAT",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Morningstar Wide Moat ETF"
}, {
	"code": "MOB",
	"status": "ADJUST_ON",
	"title": "Mobilicom Ltd"
}, {
	"code": "MOC",
	"status": "ADJUST_ON",
	"title": "Mortgage Choice Ltd"
}, {
	"code": "MOE",
	"status": "ADJUST_ON",
	"title": "Moelis Australia Ltd"
}, {
	"code": "MOGL",
	"status": "ADJUST_ON",
	"title": "Montaka Global Long Only Equities Fund (Managed Fund)"
}, {
	"code": "MOH",
	"status": "ADJUST_ON",
	"title": "Moho Resources Ltd"
}, {
	"code": "MOQ",
	"status": "ADJUST_ON",
	"title": "MOQ Ltd"
}, {
	"code": "MOT",
	"status": "ADJUST_ON",
	"title": "MCP Income Opportunities Trust"
}, {
	"code": "MOZ",
	"status": "ADJUST_ON",
	"title": "Mosaic Brands Ltd"
}, {
	"code": "MP1",
	"status": "ADJUST_ON",
	"title": "Megaport Ltd"
}, {
	"code": "MPA",
	"status": "ADJUST_ON",
	"title": "Mad Paws Holdings Ltd"
}, {
	"code": "MPH",
	"status": "ADJUST_ON",
	"title": "Mediland Pharm Ltd"
}, {
	"code": "MPL",
	"status": "ADJUST_ON",
	"title": "Medibank Private Ltd"
}, {
	"code": "MPP",
	"status": "ADJUST_ON",
	"title": "Metro Performance Glass Ltd"
}, {
	"code": "MPR",
	"status": "ADJUST_ON",
	"title": "Mpower Group Ltd"
}, {
	"code": "MPX",
	"status": "ADJUST_ON",
	"title": "Mustera Property Group Ltd"
}, {
	"code": "MQG",
	"status": "ADJUST_ON",
	"title": "Macquarie Group Ltd"
}, {
	"code": "MQR",
	"status": "ADJUST_ON",
	"title": "Marquee Resources Ltd"
}, {
	"code": "MR1",
	"status": "ADJUST_ON",
	"title": "Montem Resources Ltd"
}, {
	"code": "MRC",
	"status": "ADJUST_ON",
	"title": "Mineral Commodities Ltd"
}, {
	"code": "MRD",
	"status": "ADJUST_ON",
	"title": "Mount Ridley Mines Ltd"
}, {
	"code": "MRG",
	"status": "ADJUST_ON",
	"title": "Murray River Organics Group Ltd"
}, {
	"code": "MRL",
	"status": "ADJUST_ON",
	"title": "Mayur Resources Ltd"
}, {
	"code": "MRM",
	"status": "ADJUST_ON",
	"title": "Mma Offshore Ltd"
}, {
	"code": "MRQ",
	"status": "ADJUST_ON",
	"title": "MRG Metals Ltd"
}, {
	"code": "MRR",
	"status": "ADJUST_ON",
	"title": "Minrex Resources Ltd"
}, {
	"code": "MRZ",
	"status": "ADJUST_ON",
	"title": "Mont Royal Resources Ltd"
}, {
	"code": "MSB",
	"status": "ADJUST_ON",
	"title": "Mesoblast Ltd"
}, {
	"code": "MSG",
	"status": "ADJUST_ON",
	"title": "MCS Services Ltd"
}, {
	"code": "MSI",
	"status": "ADJUST_ON",
	"title": "Multistack International Ltd"
}, {
	"code": "MSL",
	"status": "ADJUST_ON",
	"title": "MSL Solutions Ltd"
}, {
	"code": "MSM",
	"status": "SUSPEND",
	"title": "MSM Corporation International Ltd"
}, {
	"code": "MSR",
	"status": "ADJUST_ON",
	"title": "Manas Resources Ltd"
}, {
	"code": "MSTR",
	"status": "ADJUST_ON",
	"title": "Morningstar International Shares Active ETF (Managed Fund)"
}, {
	"code": "MSV",
	"status": "ADJUST_ON",
	"title": "Mitchell Services Ltd"
}, {
	"code": "MTB",
	"status": "ADJUST_ON",
	"title": "Mount Burgess Mining NL"
}, {
	"code": "MTC",
	"status": "ADJUST_ON",
	"title": "Metalstech Ltd"
}, {
	"code": "MTH",
	"status": "ADJUST_ON",
	"title": "Mithril Resources Ltd"
}, {
	"code": "MTO",
	"status": "ADJUST_ON",
	"title": "Motorcycle Holdings Ltd"
}, {
	"code": "MTS",
	"status": "ADJUST_ON",
	"title": "Metcash Ltd"
}, {
	"code": "MVA",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Property ETF"
}, {
	"code": "MVB",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Banks ETF"
}, {
	"code": "MVE",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors S&P\/ASX Midcap ETF"
}, {
	"code": "MVF",
	"status": "ADJUST_ON",
	"title": "Monash Ivf Group Ltd"
}, {
	"code": "MVL",
	"status": "ADJUST_ON",
	"title": "Marvel Gold Ltd"
}, {
	"code": "MVOL",
	"status": "ADJUST_ON",
	"title": "Ishares Edge MSCI Australia Minimum Volatility ETF"
}, {
	"code": "MVP",
	"status": "ADJUST_ON",
	"title": "Medical Developments International Ltd"
}, {
	"code": "MVR",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Resources ETF"
}, {
	"code": "MVS",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Small Companies Masters ETF"
}, {
	"code": "MVW",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian EQUAL Weight ETF"
}, {
	"code": "MWY",
	"status": "ADJUST_ON",
	"title": "Midway Ltd"
}, {
	"code": "MX1",
	"status": "ADJUST_ON",
	"title": "Micro-X Ltd"
}, {
	"code": "MXC",
	"status": "ADJUST_ON",
	"title": "MGC Pharmaceuticals Ltd"
}, {
	"code": "MXI",
	"status": "ADJUST_ON",
	"title": "Maxitrans Industries Ltd"
}, {
	"code": "MXO",
	"status": "ADJUST_ON",
	"title": "Motio Ltd"
}, {
	"code": "MXR",
	"status": "ADJUST_ON",
	"title": "Maximus Resources Ltd"
}, {
	"code": "MXT",
	"status": "ADJUST_ON",
	"title": "MCP Master Income Trust"
}, {
	"code": "MYD",
	"status": "ADJUST_ON",
	"title": "Mydeal.com.Au Ltd"
}, {
	"code": "MYE",
	"status": "ADJUST_ON",
	"title": "Mastermyne Group Ltd"
}, {
	"code": "MYG",
	"status": "ADJUST_ON",
	"title": "Mayfield Group Holdings Ltd"
}, {
	"code": "MYL",
	"status": "SUSPEND",
	"title": "Myanmar Metals Ltd"
}, {
	"code": "MYR",
	"status": "ADJUST_ON",
	"title": "Myer Holdings Ltd"
}, {
	"code": "MYS",
	"status": "ADJUST_ON",
	"title": "Mystate Ltd"
}, {
	"code": "MYX",
	"status": "ADJUST_ON",
	"title": "Mayne Pharma Group Ltd"
}, {
	"code": "MZZ",
	"status": "ADJUST_ON",
	"title": "Matador Mining Ltd"
}, {
	"code": "N1H",
	"status": "ADJUST_ON",
	"title": "N1 Holdings Ltd"
}, {
	"code": "NAB",
	"status": "ADJUST_ON",
	"title": "National Australia Bank Ltd"
}, {
	"code": "NAC",
	"status": "ADJUST_ON",
	"title": "Naos Ex-50 Opportunities Company Ltd"
}, {
	"code": "NAE",
	"status": "ADJUST_ON",
	"title": "New Age Exploration Ltd"
}, {
	"code": "NAG",
	"status": "ADJUST_ON",
	"title": "Nagambie Resources Ltd"
}, {
	"code": "NAM",
	"status": "ADJUST_ON",
	"title": "Namoi Cotton Ltd"
}, {
	"code": "NAN",
	"status": "ADJUST_ON",
	"title": "Nanosonics Ltd"
}, {
	"code": "NBI",
	"status": "ADJUST_ON",
	"title": "NB Global Corporate Income Trust"
}, {
	"code": "NC6",
	"status": "ADJUST_ON",
	"title": "Nanollose Ltd"
}, {
	"code": "NCC",
	"status": "ADJUST_ON",
	"title": "Naos Emerging Opportunities Company Ltd"
}, {
	"code": "NCK",
	"status": "ADJUST_ON",
	"title": "Nick Scali Ltd"
}, {
	"code": "NCL",
	"status": "ADJUST_ON",
	"title": "Netccentric Ltd"
}, {
	"code": "NCM",
	"status": "ADJUST_ON",
	"title": "Newcrest Mining Ltd"
}, {
	"code": "NCR",
	"status": "ADJUST_ON",
	"title": "Nucoal Resources Ltd"
}, {
	"code": "NCZ",
	"status": "ADJUST_ON",
	"title": "New Century Resources Ltd"
}, {
	"code": "NDIA",
	"status": "ADJUST_ON",
	"title": "ETFs-Nam India Nifty 50 ETF"
}, {
	"code": "NDQ",
	"status": "ADJUST_ON",
	"title": "Betashares Nasdaq 100 ETF"
}, {
	"code": "NEA",
	"status": "ADJUST_ON",
	"title": "Nearmap Ltd"
}, {
	"code": "NEC",
	"status": "ADJUST_ON",
	"title": "Nine Entertainment Co. Holdings Ltd"
}, {
	"code": "NES",
	"status": "ADJUST_ON",
	"title": "Nelson Resources Ltd"
}, {
	"code": "NET",
	"status": "ADJUST_ON",
	"title": "Netlinkz Ltd"
}, {
	"code": "NEU",
	"status": "ADJUST_ON",
	"title": "Neuren Pharmaceuticals Ltd"
}, {
	"code": "NEW",
	"status": "ADJUST_ON",
	"title": "NEW Energy Solar"
}, {
	"code": "NGE",
	"status": "ADJUST_ON",
	"title": "NGE Capital Ltd"
}, {
	"code": "NGI",
	"status": "ADJUST_ON",
	"title": "Navigator Global Investments Ltd"
}, {
	"code": "NGS",
	"status": "ADJUST_ON",
	"title": "Nutritional Growth Solutions Ltd"
}, {
	"code": "NGY",
	"status": "ADJUST_ON",
	"title": "Nuenergy Gas Ltd"
}, {
	"code": "NHC",
	"status": "ADJUST_ON",
	"title": "New Hope Corporation Ltd"
}, {
	"code": "NHF",
	"status": "ADJUST_ON",
	"title": "Nib Holdings Ltd"
}, {
	"code": "NIC",
	"status": "ADJUST_ON",
	"title": "Nickel Mines Ltd"
}, {
	"code": "NKL",
	"status": "ADJUST_ON",
	"title": "Nickelx Ltd"
}, {
	"code": "NME",
	"status": "ADJUST_ON",
	"title": "NEX Metals Exploration Ltd"
}, {
	"code": "NML",
	"status": "ADJUST_ON",
	"title": "Navarre Minerals Ltd"
}, {
	"code": "NMR",
	"status": "ADJUST_ON",
	"title": "Native Mineral Resources Holdings Ltd"
}, {
	"code": "NMT",
	"status": "ADJUST_ON",
	"title": "Neometals Ltd"
}, {
	"code": "NNG",
	"status": "ADJUST_ON",
	"title": "Nexion Group Ltd"
}, {
	"code": "NNT",
	"status": "ADJUST_ON",
	"title": "99 Technology Ltd"
}, {
	"code": "NOR",
	"status": "ADJUST_ON",
	"title": "Norwood Systems Ltd"
}, {
	"code": "NOV",
	"status": "ADJUST_ON",
	"title": "Novatti Group Ltd"
}, {
	"code": "NOX",
	"status": "ADJUST_ON",
	"title": "Noxopharm Ltd"
}, {
	"code": "NPM",
	"status": "ADJUST_ON",
	"title": "Newpeak Metals Ltd"
}, {
	"code": "NRX",
	"status": "ADJUST_ON",
	"title": "Noronex Ltd"
}, {
	"code": "NSB",
	"status": "ADJUST_ON",
	"title": "Neuroscientific Biopharmaceuticals Ltd"
}, {
	"code": "NSC",
	"status": "ADJUST_ON",
	"title": "Naos Small Cap Opportunities Company Ltd"
}, {
	"code": "NSE",
	"status": "SUSPEND",
	"title": "New Standard Energy Ltd"
}, {
	"code": "NSM",
	"status": "ADJUST_ON",
	"title": "North Stawell Minerals Ltd"
}, {
	"code": "NSR",
	"status": "ADJUST_ON",
	"title": "National Storage REIT"
}, {
	"code": "NST",
	"status": "ADJUST_ON",
	"title": "Northern Star Resources Ltd"
}, {
	"code": "NSX",
	"status": "ADJUST_ON",
	"title": "NSX Ltd"
}, {
	"code": "NTD",
	"status": "ADJUST_ON",
	"title": "National Tyre & Wheel Ltd"
}, {
	"code": "NTI",
	"status": "ADJUST_ON",
	"title": "Neurotech International Ltd"
}, {
	"code": "NTL",
	"status": "ADJUST_ON",
	"title": "New Talisman Gold Mines Ltd"
}, {
	"code": "NTO",
	"status": "ADJUST_ON",
	"title": "Nitro Software Ltd"
}, {
	"code": "NTU",
	"status": "ADJUST_ON",
	"title": "Northern Minerals Ltd"
}, {
	"code": "NUC",
	"status": "ADJUST_ON",
	"title": "Nuchev Ltd"
}, {
	"code": "NUF",
	"status": "ADJUST_ON",
	"title": "Nufarm Ltd"
}, {
	"code": "NUH",
	"status": "ADJUST_ON",
	"title": "Nuheara Ltd"
}, {
	"code": "NUS",
	"status": "ADJUST_ON",
	"title": "Nusantara Resources Ltd"
}, {
	"code": "NVA",
	"status": "ADJUST_ON",
	"title": "Nova Minerals Ltd"
}, {
	"code": "NVU",
	"status": "ADJUST_ON",
	"title": "Nanoveu Ltd"
}, {
	"code": "NVX",
	"status": "ADJUST_ON",
	"title": "Novonix Ltd"
}, {
	"code": "NWC",
	"status": "ADJUST_ON",
	"title": "New World Resources Ltd"
}, {
	"code": "NWE",
	"status": "ADJUST_ON",
	"title": "Norwest Energy NL"
}, {
	"code": "NWF",
	"status": "ADJUST_ON",
	"title": "Newfield Resources Ltd"
}, {
	"code": "NWH",
	"status": "ADJUST_ON",
	"title": "NRW Holdings Ltd"
}, {
	"code": "NWL",
	"status": "ADJUST_ON",
	"title": "Netwealth Group Ltd"
}, {
	"code": "NWM",
	"status": "ADJUST_ON",
	"title": "Norwest Minerals Ltd"
}, {
	"code": "NWS",
	"status": "ADJUST_ON",
	"title": "News Corporation"
}, {
	"code": "NWSLV",
	"status": "ADJUST_ON",
	"title": "News Corporation"
}, {
	"code": "NXE",
	"status": "SUSPEND",
	"title": "New Energy Minerals Ltd"
}, {
	"code": "NXL",
	"status": "ADJUST_ON",
	"title": "NUIX Ltd"
}, {
	"code": "NXM",
	"status": "ADJUST_ON",
	"title": "Nexus Minerals Ltd"
}, {
	"code": "NXS",
	"status": "ADJUST_ON",
	"title": "Next Science Ltd"
}, {
	"code": "NXT",
	"status": "ADJUST_ON",
	"title": "NEXTDC Ltd"
}, {
	"code": "NYR",
	"status": "ADJUST_ON",
	"title": "Nyrada Inc"
}, {
	"code": "NZK",
	"status": "ADJUST_ON",
	"title": "New Zealand King Salmon Investments Ltd"
}, {
	"code": "NZM",
	"status": "ADJUST_ON",
	"title": "NZME Ltd"
}, {
	"code": "NZO",
	"status": "ADJUST_ON",
	"title": "New Zealand Oil & Gas Ltd"
}, {
	"code": "NZS",
	"status": "ADJUST_ON",
	"title": "New Zealand Coastal Seafoods Ltd"
}, {
	"code": "OAK",
	"status": "ADJUST_ON",
	"title": "Oakridge International Ltd"
}, {
	"code": "OAR",
	"status": "ADJUST_ON",
	"title": "OAR Resources Ltd"
}, {
	"code": "OAU",
	"status": "ADJUST_ON",
	"title": "Ora Gold Ltd"
}, {
	"code": "OBL",
	"status": "ADJUST_ON",
	"title": "Omni Bridgeway Ltd"
}, {
	"code": "OBM",
	"status": "ADJUST_ON",
	"title": "Ora Banda Mining Ltd"
}, {
	"code": "OCA",
	"status": "ADJUST_ON",
	"title": "Oceania Healthcare Ltd"
}, {
	"code": "OCC",
	"status": "ADJUST_ON",
	"title": "Orthocell Ltd"
}, {
	"code": "OCL",
	"status": "ADJUST_ON",
	"title": "Objective Corporation Ltd"
}, {
	"code": "ODA",
	"status": "ADJUST_ON",
	"title": "Orcoda Ltd"
}, {
	"code": "ODM",
	"status": "ADJUST_ON",
	"title": "Odin Metals Ltd"
}, {
	"code": "ODY",
	"status": "ADJUST_ON",
	"title": "Odyssey Gold Ltd"
}, {
	"code": "OEC",
	"status": "ADJUST_ON",
	"title": "Orbital Corporation Ltd"
}, {
	"code": "OEL",
	"status": "ADJUST_ON",
	"title": "Otto Energy Ltd"
}, {
	"code": "OEQ",
	"status": "ADJUST_ON",
	"title": "Orion Equities Ltd"
}, {
	"code": "OEX",
	"status": "ADJUST_ON",
	"title": "OILEX Ltd"
}, {
	"code": "OFX",
	"status": "ADJUST_ON",
	"title": "OFX Group Ltd"
}, {
	"code": "OGA",
	"status": "ADJUST_ON",
	"title": "Ocean Grown Abalone Ltd"
}, {
	"code": "OGC",
	"status": "ADJUST_ON",
	"title": "Oceanagold Corporation"
}, {
	"code": "OIL",
	"status": "ADJUST_ON",
	"title": "Optiscan Imaging Ltd"
}, {
	"code": "OKJ",
	"status": "ADJUST_ON",
	"title": "Oakajee Corporation Ltd"
}, {
	"code": "OKR",
	"status": "ADJUST_ON",
	"title": "Okapi Resources Ltd"
}, {
	"code": "OKU",
	"status": "ADJUST_ON",
	"title": "Oklo Resources Ltd"
}, {
	"code": "OLH",
	"status": "ADJUST_ON",
	"title": "Oldfields Holdings Ltd"
}, {
	"code": "OLI",
	"status": "SUSPEND",
	"title": "Oliver's Real Food Ltd"
}, {
	"code": "OLL",
	"status": "ADJUST_ON",
	"title": "Openlearning Ltd"
}, {
	"code": "OMH",
	"status": "ADJUST_ON",
	"title": "Om Holdings Ltd"
}, {
	"code": "OML",
	"status": "ADJUST_ON",
	"title": "Ooh!Media Ltd"
}, {
	"code": "ONE",
	"status": "ADJUST_ON",
	"title": "Oneview Healthcare Plc"
}, {
	"code": "ONT",
	"status": "ADJUST_ON",
	"title": "1300 Smiles Ltd"
}, {
	"code": "ONX",
	"status": "ADJUST_ON",
	"title": "Orminex Ltd"
}, {
	"code": "OOK",
	"status": "SUSPEND",
	"title": "Ookami Ltd"
}, {
	"code": "OOO",
	"status": "ADJUST_ON",
	"title": "Betashares Crude Oil INDEX ETF-Currency Hedged (Synthetic)"
}, {
	"code": "OPH",
	"status": "ADJUST_ON",
	"title": "Ophir High Conviction Fund"
}, {
	"code": "OPL",
	"status": "ADJUST_ON",
	"title": "Opyl Ltd"
}, {
	"code": "OPT",
	"status": "ADJUST_ON",
	"title": "Opthea Ltd"
}, {
	"code": "OPY",
	"status": "ADJUST_ON",
	"title": "Openpay Group Ltd"
}, {
	"code": "ORA",
	"status": "ADJUST_ON",
	"title": "Orora Ltd"
}, {
	"code": "ORE",
	"status": "ADJUST_ON",
	"title": "Orocobre Ltd"
}, {
	"code": "ORG",
	"status": "ADJUST_ON",
	"title": "Origin Energy Ltd"
}, {
	"code": "ORI",
	"status": "ADJUST_ON",
	"title": "Orica Ltd"
}, {
	"code": "ORM",
	"status": "ADJUST_ON",
	"title": "Orion Metals Ltd"
}, {
	"code": "ORN",
	"status": "ADJUST_ON",
	"title": "Orion Minerals Ltd"
}, {
	"code": "ORR",
	"status": "ADJUST_ON",
	"title": "Orecorp Ltd"
}, {
	"code": "OSH",
	"status": "ADJUST_ON",
	"title": "Oil Search Ltd"
}, {
	"code": "OSL",
	"status": "ADJUST_ON",
	"title": "Oncosil Medical Ltd"
}, {
	"code": "OSP",
	"status": "ADJUST_ON",
	"title": "Osprey Medical Inc"
}, {
	"code": "OSX",
	"status": "ADJUST_ON",
	"title": "Osteopore Ltd"
}, {
	"code": "OTW",
	"status": "ADJUST_ON",
	"title": "Over the Wire Holdings Ltd"
}, {
	"code": "OVN",
	"status": "ADJUST_ON",
	"title": "Oventus Medical Ltd"
}, {
	"code": "OVT",
	"status": "ADJUST_ON",
	"title": "Ovato Ltd"
}, {
	"code": "OXX",
	"status": "ADJUST_ON",
	"title": "Octanex Ltd"
}, {
	"code": "OZF",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 200 Financials Ex A-REIT Fund"
}, {
	"code": "OZG",
	"status": "ADJUST_ON",
	"title": "Ozgrowth Ltd"
}, {
	"code": "OZL",
	"status": "ADJUST_ON",
	"title": "OZ Minerals Ltd"
}, {
	"code": "OZM",
	"status": "ADJUST_ON",
	"title": "Ozaurum Resources Ltd"
}, {
	"code": "OZR",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 200 Resources Fund"
}, {
	"code": "PAA",
	"status": "ADJUST_ON",
	"title": "Pharmaust Ltd"
}, {
	"code": "PAB",
	"status": "ADJUST_ON",
	"title": "PATRYS Ltd"
}, {
	"code": "PAC",
	"status": "ADJUST_ON",
	"title": "Pacific Current Group Ltd"
}, {
	"code": "PAF",
	"status": "ADJUST_ON",
	"title": "PM Capital Asian Opportunities Fund Ltd"
}, {
	"code": "PAI",
	"status": "ADJUST_ON",
	"title": "Platinum Asia Investments Ltd"
}, {
	"code": "PAK",
	"status": "ADJUST_ON",
	"title": "Pacific American Holdings Ltd"
}, {
	"code": "PAL",
	"status": "ADJUST_ON",
	"title": "Palla Pharma Ltd"
}, {
	"code": "PAM",
	"status": "ADJUST_ON",
	"title": "Pan Asia Metals Ltd"
}, {
	"code": "PAN",
	"status": "ADJUST_ON",
	"title": "Panoramic Resources Ltd"
}, {
	"code": "PAR",
	"status": "ADJUST_ON",
	"title": "Paradigm Biopharmaceuticals Ltd"
}, {
	"code": "PAXX",
	"status": "ADJUST_ON",
	"title": "Platinum Asia Fund (Quoted Managed Hedge Fund)"
}, {
	"code": "PBH",
	"status": "ADJUST_ON",
	"title": "Pointsbet Holdings Ltd"
}, {
	"code": "PBP",
	"status": "ADJUST_ON",
	"title": "Probiotec Ltd"
}, {
	"code": "PBX",
	"status": "SUSPEND",
	"title": "Pacific Bauxite Ltd"
}, {
	"code": "PCG",
	"status": "ADJUST_ON",
	"title": "Pengana Capital Group Ltd"
}, {
	"code": "PCH",
	"status": "SUSPEND",
	"title": "Property Connect Holdings Ltd"
}, {
	"code": "PCI",
	"status": "ADJUST_ON",
	"title": "Perpetual Credit Income Trust"
}, {
	"code": "PCK",
	"status": "ADJUST_ON",
	"title": "Painchek Ltd"
}, {
	"code": "PCL",
	"status": "ADJUST_ON",
	"title": "Pancontinental Oil & Gas NL"
}, {
	"code": "PDI",
	"status": "ADJUST_ON",
	"title": "Predictive Discovery Ltd"
}, {
	"code": "PDL",
	"status": "ADJUST_ON",
	"title": "Pendal Group Ltd"
}, {
	"code": "PDN",
	"status": "ADJUST_ON",
	"title": "Paladin Energy Ltd"
}, {
	"code": "PDZ",
	"status": "ADJUST_ON",
	"title": "Prairie Mining Ltd"
}, {
	"code": "PE1",
	"status": "ADJUST_ON",
	"title": "Pengana Private Equity Trust"
}, {
	"code": "PEC",
	"status": "ADJUST_ON",
	"title": "Perpetual Resources Ltd"
}, {
	"code": "PEK",
	"status": "ADJUST_ON",
	"title": "Peak Resources Ltd"
}, {
	"code": "PEN",
	"status": "ADJUST_ON",
	"title": "Peninsula Energy Ltd"
}, {
	"code": "PET",
	"status": "SUSPEND",
	"title": "Phoslock Environmental Technologies Ltd"
}, {
	"code": "PEX",
	"status": "ADJUST_ON",
	"title": "Peel Mining Ltd"
}, {
	"code": "PF1",
	"status": "ADJUST_ON",
	"title": "Pathfinder Resources Ltd"
}, {
	"code": "PFG",
	"status": "ADJUST_ON",
	"title": "Prime Financial Group Ltd"
}, {
	"code": "PFP",
	"status": "ADJUST_ON",
	"title": "Propel Funeral Partners Ltd"
}, {
	"code": "PFT",
	"status": "ADJUST_ON",
	"title": "Pure Foods Tasmania Ltd"
}, {
	"code": "PG1",
	"status": "ADJUST_ON",
	"title": "Pearl Global Ltd"
}, {
	"code": "PGC",
	"status": "ADJUST_ON",
	"title": "Paragon Care Ltd"
}, {
	"code": "PGD",
	"status": "ADJUST_ON",
	"title": "Peregrine Gold Ltd"
}, {
	"code": "PGF",
	"status": "ADJUST_ON",
	"title": "PM Capital Global Opportunities Fund Ltd"
}, {
	"code": "PGG",
	"status": "ADJUST_ON",
	"title": "Partners Group Global Income Fund"
}, {
	"code": "PGH",
	"status": "ADJUST_ON",
	"title": "Pact Group Holdings Ltd"
}, {
	"code": "PGL",
	"status": "ADJUST_ON",
	"title": "Prospa Group Ltd"
}, {
	"code": "PGM",
	"status": "ADJUST_ON",
	"title": "Platina Resources Ltd"
}, {
	"code": "PGY",
	"status": "SUSPEND",
	"title": "Pilot Energy Ltd"
}, {
	"code": "PH2",
	"status": "ADJUST_ON",
	"title": "Pure Hydrogen Corporation Ltd"
}, {
	"code": "PHL",
	"status": "ADJUST_ON",
	"title": "Propell Holdings Ltd"
}, {
	"code": "PIA",
	"status": "ADJUST_ON",
	"title": "Pengana International Equities Ltd"
}, {
	"code": "PIC",
	"status": "ADJUST_ON",
	"title": "Perpetual Equity Investment Company Ltd"
}, {
	"code": "PIL",
	"status": "ADJUST_ON",
	"title": "Peppermint Innovation Ltd"
}, {
	"code": "PIQ",
	"status": "ADJUST_ON",
	"title": "Proteomics International Laboratories Ltd"
}, {
	"code": "PIXX",
	"status": "ADJUST_ON",
	"title": "Platinum International Fund (Quoted Managed Hedge Fund)"
}, {
	"code": "PKD",
	"status": "ADJUST_ON",
	"title": "Parkd Ltd"
}, {
	"code": "PKO",
	"status": "ADJUST_ON",
	"title": "Peako Ltd"
}, {
	"code": "PKS",
	"status": "ADJUST_ON",
	"title": "PKS Holdings Ltd"
}, {
	"code": "PL8",
	"status": "ADJUST_ON",
	"title": "Plato Income Maximiser Ltd"
}, {
	"code": "PLLDA",
	"status": "ADJUST_ON",
	"title": "Piedmont Lithium Inc"
}, {
	"code": "PLS",
	"status": "ADJUST_ON",
	"title": "Pilbara Minerals Ltd"
}, {
	"code": "PLT",
	"status": "ADJUST_ON",
	"title": "Plenti Group Ltd"
}, {
	"code": "PLUS",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Corporate Bond Plus ETF"
}, {
	"code": "PLY",
	"status": "ADJUST_ON",
	"title": "Playside Studios Ltd"
}, {
	"code": "PMC",
	"status": "ADJUST_ON",
	"title": "Platinum Capital Ltd"
}, {
	"code": "PME",
	"status": "ADJUST_ON",
	"title": "Pro Medicus Ltd"
}, {
	"code": "PMGOLD",
	"status": "ADJUST_ON",
	"title": "Gold Corporation"
}, {
	"code": "PMV",
	"status": "ADJUST_ON",
	"title": "Premier Investments Ltd"
}, {
	"code": "PNC",
	"status": "ADJUST_ON",
	"title": "Pioneer Credit Ltd"
}, {
	"code": "PNI",
	"status": "ADJUST_ON",
	"title": "Pinnacle Investment Management Group Ltd"
}, {
	"code": "PNL",
	"status": "SUSPEND",
	"title": "Paringa Resources Ltd"
}, {
	"code": "PNM",
	"status": "ADJUST_ON",
	"title": "Pacific Nickel Mines Ltd"
}, {
	"code": "PNN",
	"status": "ADJUST_ON",
	"title": "Pepinnini Minerals Ltd"
}, {
	"code": "PNR",
	"status": "ADJUST_ON",
	"title": "Pantoro Ltd"
}, {
	"code": "PNV",
	"status": "ADJUST_ON",
	"title": "Polynovo Ltd"
}, {
	"code": "PNX",
	"status": "ADJUST_ON",
	"title": "PNX Metals Ltd"
}, {
	"code": "PO3",
	"status": "ADJUST_ON",
	"title": "Purifloh Ltd"
}, {
	"code": "POD",
	"status": "ADJUST_ON",
	"title": "Podium Minerals Ltd"
}, {
	"code": "POS",
	"status": "ADJUST_ON",
	"title": "Poseidon Nickel Ltd"
}, {
	"code": "POU",
	"status": "ADJUST_ON",
	"title": "Betashares British Pound ETF"
}, {
	"code": "POW",
	"status": "ADJUST_ON",
	"title": "Protean Energy Ltd"
}, {
	"code": "PPC",
	"status": "ADJUST_ON",
	"title": "Peet Ltd"
}, {
	"code": "PPE",
	"status": "ADJUST_ON",
	"title": "People Infrastructure Ltd"
}, {
	"code": "PPG",
	"status": "ADJUST_ON",
	"title": "Pro-Pac Packaging Ltd"
}, {
	"code": "PPH",
	"status": "ADJUST_ON",
	"title": "Pushpay Holdings Ltd"
}, {
	"code": "PPK",
	"status": "ADJUST_ON",
	"title": "PPK Group Ltd"
}, {
	"code": "PPL",
	"status": "ADJUST_ON",
	"title": "Pureprofile Ltd"
}, {
	"code": "PPS",
	"status": "ADJUST_ON",
	"title": "Praemium Ltd"
}, {
	"code": "PPT",
	"status": "ADJUST_ON",
	"title": "Perpetual Ltd"
}, {
	"code": "PPY",
	"status": "ADJUST_ON",
	"title": "Papyrus Australia Ltd"
}, {
	"code": "PRL",
	"status": "ADJUST_ON",
	"title": "Province Resources Ltd"
}, {
	"code": "PRM",
	"status": "ADJUST_ON",
	"title": "Prominence Energy NL"
}, {
	"code": "PRN",
	"status": "ADJUST_ON",
	"title": "Perenti Global Ltd"
}, {
	"code": "PRO",
	"status": "ADJUST_ON",
	"title": "Prophecy International Holdings Ltd"
}, {
	"code": "PRS",
	"status": "ADJUST_ON",
	"title": "Prospech Ltd"
}, {
	"code": "PRT",
	"status": "ADJUST_ON",
	"title": "Prime Media Group Ltd"
}, {
	"code": "PRU",
	"status": "ADJUST_ON",
	"title": "Perseus Mining Ltd"
}, {
	"code": "PRX",
	"status": "ADJUST_ON",
	"title": "Prodigy Gold NL"
}, {
	"code": "PSA",
	"status": "SUSPEND",
	"title": "Petsec Energy Ltd"
}, {
	"code": "PSC",
	"status": "ADJUST_ON",
	"title": "Prospect Resources Ltd"
}, {
	"code": "PSI",
	"status": "ADJUST_ON",
	"title": "PSC Insurance Group Ltd"
}, {
	"code": "PSL",
	"status": "ADJUST_ON",
	"title": "Paterson Resources Ltd"
}, {
	"code": "PSQ",
	"status": "ADJUST_ON",
	"title": "Pacific Smiles Group Ltd"
}, {
	"code": "PTB",
	"status": "ADJUST_ON",
	"title": "PTB Group Ltd"
}, {
	"code": "PTG",
	"status": "ADJUST_ON",
	"title": "Proptech Group Ltd"
}, {
	"code": "PTL",
	"status": "ADJUST_ON",
	"title": "Pental Ltd"
}, {
	"code": "PTM",
	"status": "ADJUST_ON",
	"title": "Platinum Asset Management Ltd"
}, {
	"code": "PTR",
	"status": "ADJUST_ON",
	"title": "Petratherm Ltd"
}, {
	"code": "PTX",
	"status": "ADJUST_ON",
	"title": "Prescient Therapeutics Ltd"
}, {
	"code": "PUA",
	"status": "ADJUST_ON",
	"title": "Peak Minerals Ltd"
}, {
	"code": "PUR",
	"status": "ADJUST_ON",
	"title": "Pursuit Minerals Ltd"
}, {
	"code": "PVE",
	"status": "ADJUST_ON",
	"title": "Po Valley Energy Ltd"
}, {
	"code": "PVL",
	"status": "ADJUST_ON",
	"title": "Powerhouse Ventures Ltd"
}, {
	"code": "PVS",
	"status": "ADJUST_ON",
	"title": "Pivotal Systems Corporation"
}, {
	"code": "PVW",
	"status": "ADJUST_ON",
	"title": "PVW Resources Ltd"
}, {
	"code": "PWG",
	"status": "ADJUST_ON",
	"title": "Primewest"
}, {
	"code": "PWH",
	"status": "ADJUST_ON",
	"title": "PWR Holdings Ltd"
}, {
	"code": "PWN",
	"status": "ADJUST_ON",
	"title": "Parkway Minerals NL"
}, {
	"code": "PWNCA",
	"status": "ADJUST_ON",
	"title": "Parkway Minerals NL"
}, {
	"code": "PWR",
	"status": "ADJUST_ON",
	"title": "Peter Warren Automotive Holdings Ltd"
}, {
	"code": "PX1",
	"status": "ADJUST_ON",
	"title": "Plexure Group Ltd"
}, {
	"code": "PXS",
	"status": "ADJUST_ON",
	"title": "Pharmaxis Ltd"
}, {
	"code": "PXX",
	"status": "ADJUST_ON",
	"title": "Polarx Ltd"
}, {
	"code": "PYC",
	"status": "ADJUST_ON",
	"title": "PYC Therapeutics Ltd"
}, {
	"code": "PYG",
	"status": "ADJUST_ON",
	"title": "Paygroup Ltd"
}, {
	"code": "PYR",
	"status": "ADJUST_ON",
	"title": "Payright Ltd"
}, {
	"code": "QAN",
	"status": "ADJUST_ON",
	"title": "Qantas Airways Ltd"
}, {
	"code": "QAU",
	"status": "ADJUST_ON",
	"title": "Betashares Gold Bullion ETF - Currency Hedged"
}, {
	"code": "QBE",
	"status": "ADJUST_ON",
	"title": "QBE Insurance Group Ltd"
}, {
	"code": "QEM",
	"status": "ADJUST_ON",
	"title": "QEM Ltd"
}, {
	"code": "QFE",
	"status": "ADJUST_ON",
	"title": "Quickfee Ltd"
}, {
	"code": "QFN",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Financials Sector ETF"
}, {
	"code": "QGL",
	"status": "SUSPEND",
	"title": "Quantum Graphite Ltd"
}, {
	"code": "QHAL",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI World Ex Australia Quality (Hedged) ETF"
}, {
	"code": "QHL",
	"status": "ADJUST_ON",
	"title": "Quickstep Holdings Ltd"
}, {
	"code": "QIP",
	"status": "ADJUST_ON",
	"title": "QANTM Intellectual Property Ltd"
}, {
	"code": "QLTY",
	"status": "ADJUST_ON",
	"title": "Betashares Global Quality Leaders ETF"
}, {
	"code": "QMIX",
	"status": "ADJUST_ON",
	"title": "SPDR MSCI World Quality MIX Fund"
}, {
	"code": "QML",
	"status": "ADJUST_ON",
	"title": "Qmines Ltd"
}, {
	"code": "QOZ",
	"status": "ADJUST_ON",
	"title": "Betashares Ftse Rafi Australia 200 ETF"
}, {
	"code": "QPM",
	"status": "ADJUST_ON",
	"title": "Queensland Pacific Metals Ltd"
}, {
	"code": "QPON",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Bank Senior Floating Rate Bond ETF"
}, {
	"code": "QRE",
	"status": "ADJUST_ON",
	"title": "Betashares Australian Resources Sector ETF"
}, {
	"code": "QRI",
	"status": "ADJUST_ON",
	"title": "Qualitas Real Estate Income Fund"
}, {
	"code": "QSML",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI Inter Small Companies QUAL ETF"
}, {
	"code": "QSS",
	"status": "SUSPEND",
	"title": "Questus Ltd"
}, {
	"code": "QTG",
	"status": "SUSPEND",
	"title": "Q Technology Group Ltd"
}, {
	"code": "QTM",
	"status": "ADJUST_ON",
	"title": "Quantum Health Group Ltd"
}, {
	"code": "QUAL",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI World Ex Australia Quality ETF"
}, {
	"code": "QUB",
	"status": "ADJUST_ON",
	"title": "QUBE Holdings Ltd"
}, {
	"code": "QUE",
	"status": "ADJUST_ON",
	"title": "Queste Communications Ltd"
}, {
	"code": "QUS",
	"status": "ADJUST_ON",
	"title": "Betashares S&P 500 EQUAL Weight ETF"
}, {
	"code": "QVE",
	"status": "ADJUST_ON",
	"title": "QV Equities Ltd"
}, {
	"code": "QXR",
	"status": "ADJUST_ON",
	"title": "QX Resources Ltd"
}, {
	"code": "R3D",
	"status": "SUSPEND",
	"title": "R3D Resources Ltd"
}, {
	"code": "RAC",
	"status": "ADJUST_ON",
	"title": "Race Oncology Ltd"
}, {
	"code": "RAG",
	"status": "SUSPEND",
	"title": "Ragnar Metals Ltd"
}, {
	"code": "RAN",
	"status": "ADJUST_ON",
	"title": "Range International Ltd"
}, {
	"code": "RAP",
	"status": "ADJUST_ON",
	"title": "Resapp Health Ltd"
}, {
	"code": "RARI",
	"status": "ADJUST_ON",
	"title": "Russell Investments Australian Responsible Investment ETF"
}, {
	"code": "RAS",
	"status": "ADJUST_ON",
	"title": "Ragusa Minerals Ltd"
}, {
	"code": "RBD",
	"status": "ADJUST_ON",
	"title": "Restaurant Brands New Zealand Ltd"
}, {
	"code": "RBL",
	"status": "ADJUST_ON",
	"title": "Redbubble Ltd"
}, {
	"code": "RBR",
	"status": "ADJUST_ON",
	"title": "RBR Group Ltd"
}, {
	"code": "RBTZ",
	"status": "ADJUST_ON",
	"title": "Betashares Global Robotics and Artificial Intelligence ETF"
}, {
	"code": "RCB",
	"status": "ADJUST_ON",
	"title": "Russell Investments Australian Select Corporate Bond ETF"
}, {
	"code": "RCE",
	"status": "ADJUST_ON",
	"title": "Recce Pharmaceuticals Ltd"
}, {
	"code": "RCL",
	"status": "ADJUST_ON",
	"title": "Readcloud Ltd"
}, {
	"code": "RCP",
	"status": "ADJUST_ON",
	"title": "Redbank Copper Ltd"
}, {
	"code": "RCR",
	"status": "ADJUST_ON",
	"title": "Rincon Resources Ltd"
}, {
	"code": "RCT",
	"status": "ADJUST_ON",
	"title": "Reef Casino Trust"
}, {
	"code": "RCW",
	"status": "ADJUST_ON",
	"title": "Rightcrowd Ltd"
}, {
	"code": "RD1",
	"status": "SUSPEND",
	"title": "Registry Direct Ltd"
}, {
	"code": "RDC",
	"status": "ADJUST_ON",
	"title": "Redcape Hotel Group"
}, {
	"code": "RDF",
	"status": "ADJUST_ON",
	"title": "Redflex Holdings Ltd"
}, {
	"code": "RDG",
	"status": "ADJUST_ON",
	"title": "Resource Development Group Ltd"
}, {
	"code": "RDH",
	"status": "ADJUST_ON",
	"title": "Redhill Education Ltd"
}, {
	"code": "RDM",
	"status": "ADJUST_ON",
	"title": "Red Metal Ltd"
}, {
	"code": "RDN",
	"status": "ADJUST_ON",
	"title": "Raiden Resources Ltd"
}, {
	"code": "RDS",
	"status": "ADJUST_ON",
	"title": "Redstone Resources Ltd"
}, {
	"code": "RDV",
	"status": "ADJUST_ON",
	"title": "Russell Investments High Dividend Australian Shares ETF"
}, {
	"code": "RDY",
	"status": "ADJUST_ON",
	"title": "Readytech Holdings Ltd"
}, {
	"code": "REA",
	"status": "ADJUST_ON",
	"title": "REA Group Ltd"
}, {
	"code": "RED",
	"status": "ADJUST_ON",
	"title": "RED 5 Ltd"
}, {
	"code": "REE",
	"status": "ADJUST_ON",
	"title": "RAREX Ltd"
}, {
	"code": "REF",
	"status": "SUSPEND",
	"title": "Reverse Corp Ltd"
}, {
	"code": "REG",
	"status": "ADJUST_ON",
	"title": "Regis Healthcare Ltd"
}, {
	"code": "REH",
	"status": "ADJUST_ON",
	"title": "Reece Ltd"
}, {
	"code": "REIT",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Ftse International Property (Hedged) ETF"
}, {
	"code": "RES",
	"status": "SUSPEND",
	"title": "Resource Generation Ltd"
}, {
	"code": "REX",
	"status": "ADJUST_ON",
	"title": "Regional Express Holdings Ltd"
}, {
	"code": "REY",
	"status": "ADJUST_ON",
	"title": "REY Resources Ltd"
}, {
	"code": "REZ",
	"status": "ADJUST_ON",
	"title": "Resources & Energy Group Ltd"
}, {
	"code": "RF1",
	"status": "ADJUST_ON",
	"title": "Regal Investment Fund"
}, {
	"code": "RFF",
	"status": "ADJUST_ON",
	"title": "Rural Funds Group"
}, {
	"code": "RFG",
	"status": "ADJUST_ON",
	"title": "Retail Food Group Ltd"
}, {
	"code": "RFR",
	"status": "ADJUST_ON",
	"title": "Rafaella Resources Ltd"
}, {
	"code": "RFT",
	"status": "ADJUST_ON",
	"title": "Rectifier Technologies Ltd"
}, {
	"code": "RFX",
	"status": "ADJUST_ON",
	"title": "Redflow Ltd"
}, {
	"code": "RGB",
	"status": "ADJUST_ON",
	"title": "Russell Investments Australian Government Bond ETF"
}, {
	"code": "RGI",
	"status": "ADJUST_ON",
	"title": "Roto-Gro International Ltd"
}, {
	"code": "RGL",
	"status": "ADJUST_ON",
	"title": "Riversgold Ltd"
}, {
	"code": "RGS",
	"status": "ADJUST_ON",
	"title": "Regeneus Ltd"
}, {
	"code": "RHC",
	"status": "ADJUST_ON",
	"title": "Ramsay Health Care Ltd"
}, {
	"code": "RHI",
	"status": "ADJUST_ON",
	"title": "Red Hill Iron Ltd"
}, {
	"code": "RHP",
	"status": "ADJUST_ON",
	"title": "Rhipe Ltd"
}, {
	"code": "RHT",
	"status": "ADJUST_ON",
	"title": "Resonance Health Ltd"
}, {
	"code": "RHY",
	"status": "ADJUST_ON",
	"title": "RHYTHM Biosciences Ltd"
}, {
	"code": "RIC",
	"status": "ADJUST_ON",
	"title": "Ridley Corporation Ltd"
}, {
	"code": "RIE",
	"status": "ADJUST_ON",
	"title": "Riedel Resources Ltd"
}, {
	"code": "RIM",
	"status": "ADJUST_ON",
	"title": "Rimfire Pacific Mining NL"
}, {
	"code": "RINC",
	"status": "ADJUST_ON",
	"title": "Betashares Legg Mason Real Income Fund (Managed Fund)"
}, {
	"code": "RIO",
	"status": "ADJUST_ON",
	"title": "RIO Tinto Ltd"
}, {
	"code": "RKN",
	"status": "ADJUST_ON",
	"title": "Reckon Ltd"
}, {
	"code": "RLC",
	"status": "ADJUST_ON",
	"title": "Reedy Lagoon Corporation Ltd"
}, {
	"code": "RLG",
	"status": "ADJUST_ON",
	"title": "Roolife Group Ltd"
}, {
	"code": "RLT",
	"status": "ADJUST_ON",
	"title": "Renergen Ltd"
}, {
	"code": "RMC",
	"status": "ADJUST_ON",
	"title": "Resimac Group Ltd"
}, {
	"code": "RMD",
	"status": "ADJUST_ON",
	"title": "Resmed Inc"
}, {
	"code": "RMG",
	"status": "SUSPEND",
	"title": "RMG Ltd"
}, {
	"code": "RMI",
	"status": "ADJUST_ON",
	"title": "Resource Mining Corporation Ltd"
}, {
	"code": "RML",
	"status": "ADJUST_ON",
	"title": "Resolution Minerals Ltd"
}, {
	"code": "RMP",
	"status": "SUSPEND",
	"title": "Red Emperor Resources NL"
}, {
	"code": "RMS",
	"status": "ADJUST_ON",
	"title": "Ramelius Resources Ltd"
}, {
	"code": "RMT",
	"status": "SUSPEND",
	"title": "Rma Energy Ltd"
}, {
	"code": "RMX",
	"status": "ADJUST_ON",
	"title": "Red Mountain Mining Ltd"
}, {
	"code": "RMY",
	"status": "ADJUST_ON",
	"title": "Rma Global Ltd"
}, {
	"code": "RND",
	"status": "ADJUST_ON",
	"title": "Rand Mining Ltd"
}, {
	"code": "RNE",
	"status": "ADJUST_ON",
	"title": "Renu Energy Ltd"
}, {
	"code": "RNO",
	"status": "ADJUST_ON",
	"title": "Rhinomed Ltd"
}, {
	"code": "RNT",
	"status": "ADJUST_ON",
	"title": "Rent.com.Au Ltd"
}, {
	"code": "RNU",
	"status": "ADJUST_ON",
	"title": "Renascor Resources Ltd"
}, {
	"code": "RNX",
	"status": "ADJUST_ON",
	"title": "Renegade Exploration Ltd"
}, {
	"code": "ROBO",
	"status": "ADJUST_ON",
	"title": "ETFs Robo Global Robotics and Automation ETF"
}, {
	"code": "ROG",
	"status": "ADJUST_ON",
	"title": "Red Sky Energy Ltd"
}, {
	"code": "ROO",
	"status": "ADJUST_ON",
	"title": "Roots Sustainable Agricultural Technologies Ltd"
}, {
	"code": "RPG",
	"status": "ADJUST_ON",
	"title": "Raptis Group Ltd"
}, {
	"code": "RPM",
	"status": "ADJUST_ON",
	"title": "RPM Automotive Group Ltd"
}, {
	"code": "RRL",
	"status": "ADJUST_ON",
	"title": "Regis Resources Ltd"
}, {
	"code": "RSG",
	"status": "ADJUST_ON",
	"title": "Resolute Mining Ltd"
}, {
	"code": "RSH",
	"status": "ADJUST_ON",
	"title": "Respiri Ltd"
}, {
	"code": "RSM",
	"status": "ADJUST_ON",
	"title": "Russell Investments Australian Semi-Government Bond ETF"
}, {
	"code": "RTE",
	"status": "ADJUST_ON",
	"title": "Retech Technology Co., Ltd"
}, {
	"code": "RTG",
	"status": "ADJUST_ON",
	"title": "RTG Mining Inc"
}, {
	"code": "RTR",
	"status": "ADJUST_ON",
	"title": "Rumble Resources Ltd"
}, {
	"code": "RUL",
	"status": "ADJUST_ON",
	"title": "Rpmglobal Holdings Ltd"
}, {
	"code": "RVR",
	"status": "ADJUST_ON",
	"title": "Red River Resources Ltd"
}, {
	"code": "RVS",
	"status": "ADJUST_ON",
	"title": "Revasum Inc"
}, {
	"code": "RWC",
	"status": "ADJUST_ON",
	"title": "Reliance Worldwide Corporation Ltd"
}, {
	"code": "RWD",
	"status": "ADJUST_ON",
	"title": "Reward Minerals Ltd"
}, {
	"code": "RXH",
	"status": "ADJUST_ON",
	"title": "Rewardle Holdings Ltd"
}, {
	"code": "RXL",
	"status": "ADJUST_ON",
	"title": "ROX Resources Ltd"
}, {
	"code": "RXM",
	"status": "ADJUST_ON",
	"title": "REX Minerals Ltd"
}, {
	"code": "RYD",
	"status": "ADJUST_ON",
	"title": "Ryder Capital Ltd"
}, {
	"code": "RZI",
	"status": "ADJUST_ON",
	"title": "RAIZ Invest Ltd"
}, {
	"code": "S2R",
	"status": "ADJUST_ON",
	"title": "S2 Resources Ltd"
}, {
	"code": "S32",
	"status": "ADJUST_ON",
	"title": "SOUTH32 Ltd"
}, {
	"code": "S66",
	"status": "ADJUST_ON",
	"title": "Star Combo Pharma Ltd"
}, {
	"code": "SAN",
	"status": "ADJUST_ON",
	"title": "Sagalio Energy Ltd"
}, {
	"code": "SAS",
	"status": "SUSPEND",
	"title": "Sky and Space Company Ltd"
}, {
	"code": "SAU",
	"status": "ADJUST_ON",
	"title": "Southern Gold Ltd"
}, {
	"code": "SBM",
	"status": "ADJUST_ON",
	"title": "ST Barbara Ltd"
}, {
	"code": "SBR",
	"status": "ADJUST_ON",
	"title": "Sabre Resources Ltd"
}, {
	"code": "SBW",
	"status": "ADJUST_ON",
	"title": "Shekel Brainweigh Ltd"
}, {
	"code": "SCG",
	"status": "ADJUST_ON",
	"title": "Scentre Group"
}, {
	"code": "SCI",
	"status": "ADJUST_ON",
	"title": "Silver City Minerals Ltd"
}, {
	"code": "SCL",
	"status": "ADJUST_ON",
	"title": "Schrole Group Ltd"
}, {
	"code": "SCN",
	"status": "ADJUST_ON",
	"title": "Scorpion Minerals Ltd"
}, {
	"code": "SCP",
	"status": "ADJUST_ON",
	"title": "Shopping Centres Australasia Property Group"
}, {
	"code": "SCT",
	"status": "ADJUST_ON",
	"title": "Scout Security Ltd"
}, {
	"code": "SCU",
	"status": "ADJUST_ON",
	"title": "Stemcell United Ltd"
}, {
	"code": "SDF",
	"status": "ADJUST_ON",
	"title": "Steadfast Group Ltd"
}, {
	"code": "SDG",
	"status": "ADJUST_ON",
	"title": "Sunland Group Ltd"
}, {
	"code": "SDI",
	"status": "ADJUST_ON",
	"title": "SDI Ltd"
}, {
	"code": "SDV",
	"status": "ADJUST_ON",
	"title": "Scidev Ltd"
}, {
	"code": "SE1",
	"status": "ADJUST_ON",
	"title": "Sensera Ltd"
}, {
	"code": "SEC",
	"status": "ADJUST_ON",
	"title": "Spheria Emerging Companies Ltd"
}, {
	"code": "SEG",
	"status": "ADJUST_ON",
	"title": "Sports Entertainment Group Ltd"
}, {
	"code": "SEK",
	"status": "ADJUST_ON",
	"title": "Seek Ltd"
}, {
	"code": "SELF",
	"status": "ADJUST_ON",
	"title": "Selfwealth SMSF Leaders ETF"
}, {
	"code": "SEN",
	"status": "ADJUST_ON",
	"title": "Senetas Corporation Ltd"
}, {
	"code": "SEQ",
	"status": "ADJUST_ON",
	"title": "Sequoia Financial Group Ltd"
}, {
	"code": "SER",
	"status": "ADJUST_ON",
	"title": "Strategic Energy Resources Ltd"
}, {
	"code": "SES",
	"status": "ADJUST_ON",
	"title": "Secos Group Ltd"
}, {
	"code": "SF1DD",
	"status": "SUSPEND",
	"title": "Stemify Ltd"
}, {
	"code": "SFC",
	"status": "ADJUST_ON",
	"title": "Schaffer Corporation Ltd"
}, {
	"code": "SFG",
	"status": "ADJUST_ON",
	"title": "Seafarms Group Ltd"
}, {
	"code": "SFM",
	"status": "ADJUST_ON",
	"title": "Santa Fe Minerals Ltd"
}, {
	"code": "SFR",
	"status": "ADJUST_ON",
	"title": "Sandfire Resources Ltd"
}, {
	"code": "SFX",
	"status": "ADJUST_ON",
	"title": "Sheffield Resources Ltd"
}, {
	"code": "SFY",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 50 Fund"
}, {
	"code": "SGC",
	"status": "ADJUST_ON",
	"title": "Sacgasco Ltd"
}, {
	"code": "SGF",
	"status": "ADJUST_ON",
	"title": "SG Fleet Group Ltd"
}, {
	"code": "SGH",
	"status": "ADJUST_ON",
	"title": "Slater & Gordon Ltd"
}, {
	"code": "SGI",
	"status": "ADJUST_ON",
	"title": "Stealth Global Holdings Ltd"
}, {
	"code": "SGLLV",
	"status": "ADJUST_ON",
	"title": "Ricegrowers Ltd"
}, {
	"code": "SGM",
	"status": "ADJUST_ON",
	"title": "Sims Ltd"
}, {
	"code": "SGP",
	"status": "ADJUST_ON",
	"title": "Stockland"
}, {
	"code": "SGQ",
	"status": "ADJUST_ON",
	"title": "ST George Mining Ltd"
}, {
	"code": "SGR",
	"status": "ADJUST_ON",
	"title": "The Star Entertainment Group Ltd"
}, {
	"code": "SHE",
	"status": "ADJUST_ON",
	"title": "Stonehorse Energy Ltd"
}, {
	"code": "SHG",
	"status": "ADJUST_ON",
	"title": "Singular Health Group Ltd"
}, {
	"code": "SHH",
	"status": "ADJUST_ON",
	"title": "Shree Minerals Ltd"
}, {
	"code": "SHJ",
	"status": "ADJUST_ON",
	"title": "Shine Justice Ltd"
}, {
	"code": "SHL",
	"status": "ADJUST_ON",
	"title": "Sonic Healthcare Ltd"
}, {
	"code": "SHM",
	"status": "ADJUST_ON",
	"title": "Shriro Holdings Ltd"
}, {
	"code": "SHN",
	"status": "ADJUST_ON",
	"title": "Sunshine Gold Ltd"
}, {
	"code": "SHO",
	"status": "ADJUST_ON",
	"title": "Sportshero Ltd"
}, {
	"code": "SHV",
	"status": "ADJUST_ON",
	"title": "Select Harvests Ltd"
}, {
	"code": "SI6",
	"status": "ADJUST_ON",
	"title": "SI6 Metals Ltd"
}, {
	"code": "SIG",
	"status": "ADJUST_ON",
	"title": "Sigma Healthcare Ltd"
}, {
	"code": "SIH",
	"status": "ADJUST_ON",
	"title": "Sihayo Gold Ltd"
}, {
	"code": "SIL",
	"status": "SUSPEND",
	"title": "Smiles Inclusive Ltd"
}, {
	"code": "SIO",
	"status": "ADJUST_ON",
	"title": "Simonds Group Ltd"
}, {
	"code": "SIQ",
	"status": "ADJUST_ON",
	"title": "Smartgroup Corporation Ltd"
}, {
	"code": "SIS",
	"status": "ADJUST_ON",
	"title": "Simble Solutions Ltd"
}, {
	"code": "SIT",
	"status": "ADJUST_ON",
	"title": "Site Group International Ltd"
}, {
	"code": "SIV",
	"status": "ADJUST_ON",
	"title": "SIV Capital Ltd"
}, {
	"code": "SIX",
	"status": "ADJUST_ON",
	"title": "Sprintex Ltd"
}, {
	"code": "SKC",
	"status": "ADJUST_ON",
	"title": "Skycity Entertainment Group Ltd"
}, {
	"code": "SKF",
	"status": "ADJUST_ON",
	"title": "SKYFII Ltd"
}, {
	"code": "SKI",
	"status": "ADJUST_ON",
	"title": "Spark Infrastructure Group"
}, {
	"code": "SKN",
	"status": "SUSPEND",
	"title": "Skin Elements Ltd"
}, {
	"code": "SKO",
	"status": "ADJUST_ON",
	"title": "Serko Ltd"
}, {
	"code": "SKS",
	"status": "ADJUST_ON",
	"title": "SKS Technologies Group Ltd"
}, {
	"code": "SKT",
	"status": "ADJUST_ON",
	"title": "Sky Network Television Ltd"
}, {
	"code": "SKY",
	"status": "ADJUST_ON",
	"title": "SKY Metals Ltd"
}, {
	"code": "SL1",
	"status": "SUSPEND",
	"title": "SYMBOL Mining Ltd"
}, {
	"code": "SLA",
	"status": "ADJUST_ON",
	"title": "Silk Laser Australia Ltd"
}, {
	"code": "SLC",
	"status": "ADJUST_ON",
	"title": "Superloop Ltd"
}, {
	"code": "SLF",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 200 Listed Property Fund"
}, {
	"code": "SLK",
	"status": "ADJUST_ON",
	"title": "Sealink Travel Group Ltd"
}, {
	"code": "SLR",
	"status": "ADJUST_ON",
	"title": "Silver Lake Resources Ltd"
}, {
	"code": "SLX",
	"status": "ADJUST_ON",
	"title": "SILEX Systems Ltd"
}, {
	"code": "SLZ",
	"status": "ADJUST_ON",
	"title": "Sultan Resources Ltd"
}, {
	"code": "SM1",
	"status": "ADJUST_ON",
	"title": "Synlait Milk Ltd"
}, {
	"code": "SMG",
	"status": "SUSPEND",
	"title": "Soon Mining Ltd"
}, {
	"code": "SMI",
	"status": "ADJUST_ON",
	"title": "Santana Minerals Ltd"
}, {
	"code": "SMLL",
	"status": "ADJUST_ON",
	"title": "Betashares Aust Small Companies Select Fund (Managed Fund)"
}, {
	"code": "SMN",
	"status": "ADJUST_ON",
	"title": "Structural Monitoring Systems Plc"
}, {
	"code": "SMP",
	"status": "ADJUST_ON",
	"title": "Smartpay Holdings Ltd"
}, {
	"code": "SMR",
	"status": "ADJUST_ON",
	"title": "Stanmore Coal Ltd"
}, {
	"code": "SMX",
	"status": "ADJUST_ON",
	"title": "Security Matters Ltd"
}, {
	"code": "SNAS",
	"status": "ADJUST_ON",
	"title": "ETFs Ultra Short Nasdaq 100 Hedge Fund"
}, {
	"code": "SNC",
	"status": "ADJUST_ON",
	"title": "Sandon Capital Investments Ltd"
}, {
	"code": "SND",
	"status": "ADJUST_ON",
	"title": "Saunders International Ltd"
}, {
	"code": "SNG",
	"status": "ADJUST_ON",
	"title": "Siren Gold Ltd"
}, {
	"code": "SNL",
	"status": "ADJUST_ON",
	"title": "Supply Network Ltd"
}, {
	"code": "SNS",
	"status": "ADJUST_ON",
	"title": "Sensen Networks Ltd"
}, {
	"code": "SNZ",
	"status": "ADJUST_ON",
	"title": "Summerset Group Holdings Ltd"
}, {
	"code": "SO4",
	"status": "ADJUST_ON",
	"title": "Salt Lake Potash Ltd"
}, {
	"code": "SOL",
	"status": "ADJUST_ON",
	"title": "Washington H Soul Pattinson & Company Ltd"
}, {
	"code": "SOM",
	"status": "ADJUST_ON",
	"title": "Somnomed Ltd"
}, {
	"code": "SOP",
	"status": "ADJUST_ON",
	"title": "Synertec Corporation Ltd"
}, {
	"code": "SOR",
	"status": "ADJUST_ON",
	"title": "Strategic Elements Ltd"
}, {
	"code": "SOV",
	"status": "ADJUST_ON",
	"title": "Sovereign Cloud Holdings Ltd"
}, {
	"code": "SP3",
	"status": "ADJUST_ON",
	"title": "Spectur Ltd"
}, {
	"code": "SPA",
	"status": "ADJUST_ON",
	"title": "Spacetalk Ltd"
}, {
	"code": "SPK",
	"status": "ADJUST_ON",
	"title": "Spark New Zealand Ltd"
}, {
	"code": "SPL",
	"status": "ADJUST_ON",
	"title": "Starpharma Holdings Ltd"
}, {
	"code": "SPN",
	"status": "ADJUST_ON",
	"title": "Sparc Technologies Ltd"
}, {
	"code": "SPQ",
	"status": "ADJUST_ON",
	"title": "Superior Resources Ltd"
}, {
	"code": "SPT",
	"status": "ADJUST_ON",
	"title": "Splitit Payments Ltd"
}, {
	"code": "SPY",
	"status": "ADJUST_ON",
	"title": "SPDR S&P 500 ETF Trust"
}, {
	"code": "SPZ",
	"status": "ADJUST_ON",
	"title": "Smart Parking Ltd"
}, {
	"code": "SRG",
	"status": "ADJUST_ON",
	"title": "SRG Global Ltd"
}, {
	"code": "SRH",
	"status": "ADJUST_ON",
	"title": "Saferoads Holdings Ltd"
}, {
	"code": "SRI",
	"status": "ADJUST_ON",
	"title": "Sipa Resources Ltd"
}, {
	"code": "SRJ",
	"status": "ADJUST_ON",
	"title": "SRJ Technologies Group Plc"
}, {
	"code": "SRK",
	"status": "ADJUST_ON",
	"title": "Strike Resources Ltd"
}, {
	"code": "SRL",
	"status": "ADJUST_ON",
	"title": "Sunrise Energy Metals Ltd"
}, {
	"code": "SRN",
	"status": "ADJUST_ON",
	"title": "Surefire Resources NL"
}, {
	"code": "SRV",
	"status": "ADJUST_ON",
	"title": "Servcorp Ltd"
}, {
	"code": "SRY",
	"status": "SUSPEND",
	"title": "Story-I Ltd"
}, {
	"code": "SRZ",
	"status": "ADJUST_ON",
	"title": "Stellar Resources Ltd"
}, {
	"code": "SSG",
	"status": "ADJUST_ON",
	"title": "Shaver Shop Group Ltd"
}, {
	"code": "SSL",
	"status": "ADJUST_ON",
	"title": "Sietel Ltd"
}, {
	"code": "SSLPA",
	"status": "ADJUST_ON",
	"title": "Sietel Ltd"
}, {
	"code": "SSM",
	"status": "ADJUST_ON",
	"title": "Service Stream Ltd"
}, {
	"code": "SSO",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX Small Ordinaries Fund"
}, {
	"code": "SSR",
	"status": "ADJUST_ON",
	"title": "SSR Mining Inc"
}, {
	"code": "SST",
	"status": "ADJUST_ON",
	"title": "Steamships Trading Company Ltd"
}, {
	"code": "ST1",
	"status": "ADJUST_ON",
	"title": "Spirit Technology Solutions Ltd"
}, {
	"code": "STA",
	"status": "ADJUST_ON",
	"title": "Strandline Resources Ltd"
}, {
	"code": "STG",
	"status": "ADJUST_ON",
	"title": "Straker Translations Ltd"
}, {
	"code": "STK",
	"status": "ADJUST_ON",
	"title": "Strickland Metals Ltd"
}, {
	"code": "STM",
	"status": "ADJUST_ON",
	"title": "Sunstone Metals Ltd"
}, {
	"code": "STN",
	"status": "ADJUST_ON",
	"title": "Saturn Metals Ltd"
}, {
	"code": "STO",
	"status": "ADJUST_ON",
	"title": "Santos Ltd"
}, {
	"code": "STW",
	"status": "ADJUST_ON",
	"title": "SPDR S&P\/ASX 200 Fund"
}, {
	"code": "STX",
	"status": "ADJUST_ON",
	"title": "Strike Energy Ltd"
}, {
	"code": "SUBD",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors Australian Subordinated Debt ETF"
}, {
	"code": "SUD",
	"status": "ADJUST_ON",
	"title": "Suda Pharmaceuticals Ltd"
}, {
	"code": "SUH",
	"status": "ADJUST_ON",
	"title": "Southern Hemisphere Mining Ltd"
}, {
	"code": "SUL",
	"status": "ADJUST_ON",
	"title": "Super Retail Group Ltd"
}, {
	"code": "SUN",
	"status": "ADJUST_ON",
	"title": "Suncorp Group Ltd"
}, {
	"code": "SUP",
	"status": "ADJUST_ON",
	"title": "Superior Lake Resources Ltd"
}, {
	"code": "SUV",
	"status": "ADJUST_ON",
	"title": "Suvo Strategic Minerals Ltd"
}, {
	"code": "SVH",
	"status": "SUSPEND",
	"title": "Silver Heritage Group Ltd"
}, {
	"code": "SVL",
	"status": "ADJUST_ON",
	"title": "Silver Mines Ltd"
}, {
	"code": "SVM",
	"status": "ADJUST_ON",
	"title": "Sovereign Metals Ltd"
}, {
	"code": "SVS",
	"status": "ADJUST_ON",
	"title": "Sunvest Corporation Ltd"
}, {
	"code": "SVW",
	"status": "ADJUST_ON",
	"title": "Seven Group Holdings Ltd"
}, {
	"code": "SVY",
	"status": "ADJUST_ON",
	"title": "Stavely Minerals Ltd"
}, {
	"code": "SW1",
	"status": "ADJUST_ON",
	"title": "Swift Media Ltd"
}, {
	"code": "SWF",
	"status": "ADJUST_ON",
	"title": "Selfwealth Ltd"
}, {
	"code": "SWK",
	"status": "ADJUST_ON",
	"title": "Swick Mining Services Ltd"
}, {
	"code": "SWM",
	"status": "ADJUST_ON",
	"title": "Seven West Media Ltd"
}, {
	"code": "SWTZ",
	"status": "ADJUST_ON",
	"title": "Switzer Dividend Growth Fund (Managed Fund)"
}, {
	"code": "SXE",
	"status": "ADJUST_ON",
	"title": "Southern Cross Electrical Engineering Ltd"
}, {
	"code": "SXL",
	"status": "ADJUST_ON",
	"title": "Southern Cross Media Group Ltd"
}, {
	"code": "SXY",
	"status": "ADJUST_ON",
	"title": "SENEX Energy Ltd"
}, {
	"code": "SYA",
	"status": "ADJUST_ON",
	"title": "Sayona Mining Ltd"
}, {
	"code": "SYD",
	"status": "ADJUST_ON",
	"title": "Sydney Airport"
}, {
	"code": "SYI",
	"status": "ADJUST_ON",
	"title": "SPDR MSCI Australia Select High Dividend Yield Fund"
}, {
	"code": "SYR",
	"status": "ADJUST_ON",
	"title": "Syrah Resources Ltd"
}, {
	"code": "SYT",
	"status": "SUSPEND",
	"title": "Syntonic Ltd"
}, {
	"code": "SZL",
	"status": "ADJUST_ON",
	"title": "Sezzle Inc"
}, {
	"code": "T3D",
	"status": "ADJUST_ON",
	"title": "333D Ltd"
}, {
	"code": "TAH",
	"status": "ADJUST_ON",
	"title": "Tabcorp Holdings Ltd"
}, {
	"code": "TAM",
	"status": "ADJUST_ON",
	"title": "Tanami Gold NL"
}, {
	"code": "TAR",
	"status": "ADJUST_ON",
	"title": "Taruga Minerals Ltd"
}, {
	"code": "TAS",
	"status": "ADJUST_ON",
	"title": "Tasman Resources Ltd"
}, {
	"code": "TBR",
	"status": "ADJUST_ON",
	"title": "Tribune Resources Ltd"
}, {
	"code": "TCF",
	"status": "ADJUST_ON",
	"title": "360 Capital Enhanced Income Fund"
}, {
	"code": "TCL",
	"status": "ADJUST_ON",
	"title": "Transurban Group"
}, {
	"code": "TCO",
	"status": "ADJUST_ON",
	"title": "Transmetro Corporation Ltd"
}, {
	"code": "TD1",
	"status": "ADJUST_ON",
	"title": "Tali Digital Ltd"
}, {
	"code": "TDL",
	"status": "SUSPEND",
	"title": "TBG Diagnostics Ltd"
}, {
	"code": "TDO",
	"status": "ADJUST_ON",
	"title": "3D Oil Ltd"
}, {
	"code": "TECH",
	"status": "ADJUST_ON",
	"title": "ETFs Morningstar Global Technology ETF"
}, {
	"code": "TEG",
	"status": "ADJUST_ON",
	"title": "Triangle Energy (Global) Ltd"
}, {
	"code": "TEK",
	"status": "ADJUST_ON",
	"title": "Thorney Technologies Ltd"
}, {
	"code": "TEM",
	"status": "ADJUST_ON",
	"title": "Tempest Minerals Ltd"
}, {
	"code": "TER",
	"status": "ADJUST_ON",
	"title": "Terracom Ltd"
}, {
	"code": "TFL",
	"status": "ADJUST_ON",
	"title": "Tasfoods Ltd"
}, {
	"code": "TG1",
	"status": "ADJUST_ON",
	"title": "Techgen Metals Ltd"
}, {
	"code": "TGA",
	"status": "ADJUST_ON",
	"title": "Thorn Group Ltd"
}, {
	"code": "TGF",
	"status": "ADJUST_ON",
	"title": "Tribeca Global Natural Resources Ltd"
}, {
	"code": "TGG",
	"status": "ADJUST_ON",
	"title": "Templeton Global Growth Fund Ltd"
}, {
	"code": "TGH",
	"status": "ADJUST_ON",
	"title": "Terragen Holdings Ltd"
}, {
	"code": "TGM",
	"status": "ADJUST_ON",
	"title": "Theta Gold Mines Ltd"
}, {
	"code": "TGN",
	"status": "ADJUST_ON",
	"title": "Tungsten Mining NL"
}, {
	"code": "TGP",
	"status": "ADJUST_ON",
	"title": "360 Capital Group"
}, {
	"code": "TGR",
	"status": "ADJUST_ON",
	"title": "Tassal Group Ltd"
}, {
	"code": "THR",
	"status": "ADJUST_ON",
	"title": "Thor Mining Plc"
}, {
	"code": "TI1",
	"status": "ADJUST_ON",
	"title": "Tombador Iron Ltd"
}, {
	"code": "TIA",
	"status": "ADJUST_ON",
	"title": "Tian An Australia Ltd"
}, {
	"code": "TIE",
	"status": "ADJUST_ON",
	"title": "Tietto Minerals Ltd"
}, {
	"code": "TIG",
	"status": "ADJUST_ON",
	"title": "Tigers Realm Coal Ltd"
}, {
	"code": "TIN",
	"status": "ADJUST_ON",
	"title": "TNT Mines Ltd"
}, {
	"code": "TIP",
	"status": "ADJUST_ON",
	"title": "Teaminvest Private Group Ltd"
}, {
	"code": "TKL",
	"status": "ADJUST_ON",
	"title": "Traka Resources Ltd"
}, {
	"code": "TKM",
	"status": "ADJUST_ON",
	"title": "Trek Metals Ltd"
}, {
	"code": "TLG",
	"status": "ADJUST_ON",
	"title": "Talga Group Ltd"
}, {
	"code": "TLM",
	"status": "ADJUST_ON",
	"title": "Talisman Mining Ltd"
}, {
	"code": "TLS",
	"status": "ADJUST_ON",
	"title": "Telstra Corporation Ltd"
}, {
	"code": "TLT",
	"status": "ADJUST_ON",
	"title": "Tilt Renewables Ltd"
}, {
	"code": "TLX",
	"status": "ADJUST_ON",
	"title": "TELIX Pharmaceuticals Ltd"
}, {
	"code": "TMG",
	"status": "ADJUST_ON",
	"title": "Trigg Mining Ltd"
}, {
	"code": "TMH",
	"status": "ADJUST_ON",
	"title": "The Market Herald Ltd"
}, {
	"code": "TMK",
	"status": "ADJUST_ON",
	"title": "Tamaska Oil and Gas Ltd"
}, {
	"code": "TML",
	"status": "ADJUST_ON",
	"title": "Timah Resources Ltd"
}, {
	"code": "TMR",
	"status": "ADJUST_ON",
	"title": "Tempus Resources Ltd"
}, {
	"code": "TMS",
	"status": "ADJUST_ON",
	"title": "Tennant Minerals NL"
}, {
	"code": "TMT",
	"status": "ADJUST_ON",
	"title": "Technology Metals Australia Ltd"
}, {
	"code": "TMX",
	"status": "ADJUST_ON",
	"title": "Terrain Minerals Ltd"
}, {
	"code": "TMZ",
	"status": "ADJUST_ON",
	"title": "Thomson Resources Ltd"
}, {
	"code": "TNE",
	"status": "ADJUST_ON",
	"title": "Technology One Ltd"
}, {
	"code": "TNG",
	"status": "ADJUST_ON",
	"title": "TNG Ltd"
}, {
	"code": "TNK",
	"status": "ADJUST_ON",
	"title": "Think Childcare Group"
}, {
	"code": "TNP",
	"status": "SUSPEND",
	"title": "Triple Energy Ltd"
}, {
	"code": "TNR",
	"status": "ADJUST_ON",
	"title": "Torian Resources Ltd"
}, {
	"code": "TNT",
	"status": "ADJUST_ON",
	"title": "Tesserent Ltd"
}, {
	"code": "TNY",
	"status": "ADJUST_ON",
	"title": "Tinybeans Group Ltd"
}, {
	"code": "TOE",
	"status": "ADJUST_ON",
	"title": "Toro Energy Ltd"
}, {
	"code": "TOM",
	"status": "SUSPEND",
	"title": "Tomizone Ltd"
}, {
	"code": "TON",
	"status": "ADJUST_ON",
	"title": "Triton Minerals Ltd"
}, {
	"code": "TOP",
	"status": "ADJUST_ON",
	"title": "Thorney Opportunities Ltd"
}, {
	"code": "TOT",
	"status": "ADJUST_ON",
	"title": "360 Capital REIT"
}, {
	"code": "TOU",
	"status": "ADJUST_ON",
	"title": "Tlou Energy Ltd"
}, {
	"code": "TPC",
	"status": "ADJUST_ON",
	"title": "TPC Consolidated Ltd"
}, {
	"code": "TPD",
	"status": "ADJUST_ON",
	"title": "Talon Petroleum Ltd"
}, {
	"code": "TPG",
	"status": "ADJUST_ON",
	"title": "TPG Telecom Ltd"
}, {
	"code": "TPO",
	"status": "ADJUST_ON",
	"title": "Tian Poh Resources Ltd"
}, {
	"code": "TPP",
	"status": "ADJUST_ON",
	"title": "Tempo Australia Ltd"
}, {
	"code": "TPS",
	"status": "ADJUST_ON",
	"title": "Threat Protect Australia Ltd"
}, {
	"code": "TPW",
	"status": "ADJUST_ON",
	"title": "Temple & Webster Group Ltd"
}, {
	"code": "TRA",
	"status": "ADJUST_ON",
	"title": "Turners Automotive Group Ltd"
}, {
	"code": "TRL",
	"status": "ADJUST_ON",
	"title": "Tanga Resources Ltd"
}, {
	"code": "TRM",
	"status": "ADJUST_ON",
	"title": "Truscott Mining Corporation Ltd"
}, {
	"code": "TRN",
	"status": "ADJUST_ON",
	"title": "Torrens Mining Ltd"
}, {
	"code": "TRS",
	"status": "ADJUST_ON",
	"title": "The Reject Shop Ltd"
}, {
	"code": "TRT",
	"status": "ADJUST_ON",
	"title": "Todd River Resources Ltd"
}, {
	"code": "TRU",
	"status": "ADJUST_ON",
	"title": "Truscreen Group Ltd"
}, {
	"code": "TRY",
	"status": "ADJUST_ON",
	"title": "Troy Resources Ltd"
}, {
	"code": "TSC",
	"status": "ADJUST_ON",
	"title": "Twenty Seven Co. Ltd"
}, {
	"code": "TSCNA",
	"status": "ADJUST_ON",
	"title": "Twenty Seven Co. Ltd"
}, {
	"code": "TSI",
	"status": "ADJUST_ON",
	"title": "Top Shelf International Holdings Ltd"
}, {
	"code": "TSL",
	"status": "SUSPEND",
	"title": "Titanium Sands Ltd"
}, {
	"code": "TSO",
	"status": "ADJUST_ON",
	"title": "Tesoro Resources Ltd"
}, {
	"code": "TTA",
	"status": "ADJUST_ON",
	"title": "TTA Holdings Ltd"
}, {
	"code": "TTB",
	"status": "ADJUST_ON",
	"title": "Total Brain Ltd"
}, {
	"code": "TTI",
	"status": "ADJUST_ON",
	"title": "Traffic Technologies Ltd"
}, {
	"code": "TTL",
	"status": "SUSPEND",
	"title": "Transcendence Technologies Ltd"
}, {
	"code": "TTM",
	"status": "ADJUST_ON",
	"title": "Titan Minerals Ltd"
}, {
	"code": "TTT",
	"status": "ADJUST_ON",
	"title": "Titomic Ltd"
}, {
	"code": "TUA",
	"status": "ADJUST_ON",
	"title": "Tuas Ltd"
}, {
	"code": "TUL",
	"status": "ADJUST_ON",
	"title": "Tulla Resources Plc"
}, {
	"code": "TV2",
	"status": "SUSPEND",
	"title": "TV2U International Ltd"
}, {
	"code": "TWD",
	"status": "ADJUST_ON",
	"title": "Tamawood Ltd"
}, {
	"code": "TWE",
	"status": "ADJUST_ON",
	"title": "Treasury Wine Estates Ltd"
}, {
	"code": "TWR",
	"status": "ADJUST_ON",
	"title": "Tower Ltd"
}, {
	"code": "TYM",
	"status": "ADJUST_ON",
	"title": "TYMLEZ Group Ltd"
}, {
	"code": "TYR",
	"status": "ADJUST_ON",
	"title": "Tyro Payments Ltd"
}, {
	"code": "TYX",
	"status": "ADJUST_ON",
	"title": "Tyranna Resources Ltd"
}, {
	"code": "TZL",
	"status": "ADJUST_ON",
	"title": "TZ Ltd"
}, {
	"code": "TZN",
	"status": "ADJUST_ON",
	"title": "Terramin Australia Ltd"
}, {
	"code": "UBI",
	"status": "ADJUST_ON",
	"title": "Universal Biosensors Inc"
}, {
	"code": "UBNDA",
	"status": "ADJUST_ON",
	"title": "Urbanise.com Ltd"
}, {
	"code": "UCM",
	"status": "ADJUST_ON",
	"title": "Uscom Ltd"
}, {
	"code": "UCW",
	"status": "ADJUST_ON",
	"title": "UCW Ltd"
}, {
	"code": "UMAX",
	"status": "ADJUST_ON",
	"title": "Betashares S&P 500 Yield Maximiser Fund (Managed Fund)"
}, {
	"code": "UMG",
	"status": "ADJUST_ON",
	"title": "United Malt Group Ltd"
}, {
	"code": "UNI",
	"status": "ADJUST_ON",
	"title": "Universal Store Holdings Ltd"
}, {
	"code": "UOS",
	"status": "ADJUST_ON",
	"title": "United Overseas Australia Ltd"
}, {
	"code": "URF",
	"status": "ADJUST_ON",
	"title": "US Masters Residential Property Fund"
}, {
	"code": "URW",
	"status": "ADJUST_ON",
	"title": "Unibail-Rodamco-Westfield"
}, {
	"code": "USD",
	"status": "ADJUST_ON",
	"title": "Betashares U.S. Dollar ETF"
}, {
	"code": "UUL",
	"status": "ADJUST_ON",
	"title": "Ultima United Ltd"
}, {
	"code": "UUV",
	"status": "ADJUST_ON",
	"title": "UUV Aquabotix Ltd"
}, {
	"code": "UWL",
	"status": "ADJUST_ON",
	"title": "Uniti Group Ltd"
}, {
	"code": "VACF",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Corp Fixed Interest INDEX ETF"
}, {
	"code": "VAE",
	"status": "ADJUST_ON",
	"title": "Vanguard Ftse Asia Ex Japan Shares INDEX ETF"
}, {
	"code": "VAF",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Fixed Interest INDEX ETF"
}, {
	"code": "VAL",
	"status": "ADJUST_ON",
	"title": "Valor Resources Ltd"
}, {
	"code": "VAN",
	"status": "ADJUST_ON",
	"title": "Vango Mining Ltd"
}, {
	"code": "VAP",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Property Securities INDEX ETF"
}, {
	"code": "VAR",
	"status": "ADJUST_ON",
	"title": "Variscan Mines Ltd"
}, {
	"code": "VAS",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Shares INDEX ETF"
}, {
	"code": "VBC",
	"status": "ADJUST_ON",
	"title": "Verbrec Ltd"
}, {
	"code": "VBLD",
	"status": "ADJUST_ON",
	"title": "Vanguard Global Infrastructure INDEX ETF"
}, {
	"code": "VBND",
	"status": "ADJUST_ON",
	"title": "Vanguard Global Aggregate Bond INDEX (Hedged) ETF"
}, {
	"code": "VBS",
	"status": "ADJUST_ON",
	"title": "Vectus Biosystems Ltd"
}, {
	"code": "VCF",
	"status": "ADJUST_ON",
	"title": "Vanguard International Credit Securities INDEX (Hedged) ETF"
}, {
	"code": "VCX",
	"status": "ADJUST_ON",
	"title": "Vicinity Centres"
}, {
	"code": "VDBA",
	"status": "ADJUST_ON",
	"title": "Vanguard Diversified Balanced INDEX ETF"
}, {
	"code": "VDCO",
	"status": "ADJUST_ON",
	"title": "Vanguard Diversified Conservative INDEX ETF"
}, {
	"code": "VDGR",
	"status": "ADJUST_ON",
	"title": "Vanguard Diversified Growth INDEX ETF"
}, {
	"code": "VDHG",
	"status": "ADJUST_ON",
	"title": "Vanguard Diversified High Growth INDEX ETF"
}, {
	"code": "VEA",
	"status": "ADJUST_ON",
	"title": "Viva Energy Group Ltd"
}, {
	"code": "VEC",
	"status": "SUSPEND",
	"title": "Vector Resources Ltd"
}, {
	"code": "VEE",
	"status": "ADJUST_ON",
	"title": "Veem Ltd"
}, {
	"code": "VEFI",
	"status": "ADJUST_ON",
	"title": "Vanguard Ethically Conscious GLB Agg Bond INDEX (Hedged) ETF"
}, {
	"code": "VEN",
	"status": "ADJUST_ON",
	"title": "Vintage Energy Ltd"
}, {
	"code": "VEQ",
	"status": "ADJUST_ON",
	"title": "Vanguard Ftse Europe Shares ETF"
}, {
	"code": "VESG",
	"status": "ADJUST_ON",
	"title": "Vanguard Ethically Conscious International Shares INDEX ETF"
}, {
	"code": "VETH",
	"status": "ADJUST_ON",
	"title": "Vanguard Ethically Conscious Australian Shares ETF"
}, {
	"code": "VEU",
	"status": "ADJUST_ON",
	"title": "Vanguard All-World Ex-US Shares INDEX ETF"
}, {
	"code": "VG1",
	"status": "ADJUST_ON",
	"title": "Vgi Partners Global Investments Ltd"
}, {
	"code": "VG8",
	"status": "ADJUST_ON",
	"title": "Vgi Partners Asian Investments Ltd"
}, {
	"code": "VGAD",
	"status": "ADJUST_ON",
	"title": "Vanguard MSCI INDEX International Shares (Hedged) ETF"
}, {
	"code": "VGB",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Government Bond INDEX ETF"
}, {
	"code": "VGE",
	"status": "ADJUST_ON",
	"title": "Vanguard Ftse Emerging Markets Shares ETF"
}, {
	"code": "VGI",
	"status": "ADJUST_ON",
	"title": "VGI Partners Ltd"
}, {
	"code": "VGL",
	"status": "ADJUST_ON",
	"title": "Vista Group International Ltd"
}, {
	"code": "VGMF",
	"status": "ADJUST_ON",
	"title": "Vanguard Global Multi-Factor Active ETF (Managed Fund)"
}, {
	"code": "VGS",
	"status": "ADJUST_ON",
	"title": "Vanguard MSCI INDEX International Shares ETF"
}, {
	"code": "VHT",
	"status": "ADJUST_ON",
	"title": "Volpara Health Technologies Ltd"
}, {
	"code": "VHY",
	"status": "ADJUST_ON",
	"title": "Vanguard Australian Shares High Yield ETF"
}, {
	"code": "VIA",
	"status": "ADJUST_ON",
	"title": "Viagold Rare Earth Resources Holdings Ltd"
}, {
	"code": "VIC",
	"status": "ADJUST_ON",
	"title": "Victory Mines Ltd"
}, {
	"code": "VIF",
	"status": "ADJUST_ON",
	"title": "Vanguard International Fixed Interest INDEX (Hedged) ETF"
}, {
	"code": "VIG",
	"status": "ADJUST_ON",
	"title": "Victor Group Holdings Ltd"
}, {
	"code": "VII",
	"status": "SUSPEND",
	"title": "Vietnam Industrial Investments Ltd"
}, {
	"code": "VIP",
	"status": "ADJUST_ON",
	"title": "VIP Gloves Ltd"
}, {
	"code": "VISM",
	"status": "ADJUST_ON",
	"title": "Vanguard MSCI International Small Companies INDEX ETF"
}, {
	"code": "VKA",
	"status": "ADJUST_ON",
	"title": "Viking Mines Ltd"
}, {
	"code": "VLC",
	"status": "ADJUST_ON",
	"title": "Vanguard MSCI Australian Large Companies INDEX ETF"
}, {
	"code": "VLS",
	"status": "ADJUST_ON",
	"title": "Vita Life Sciences Ltd"
}, {
	"code": "VLUE",
	"status": "ADJUST_ON",
	"title": "Vaneck Vectors MSCI International Value ETF"
}, {
	"code": "VMC",
	"status": "ADJUST_ON",
	"title": "Venus Metals Corporation Ltd"
}, {
	"code": "VMG",
	"status": "ADJUST_ON",
	"title": "VDM Group Ltd"
}, {
	"code": "VMIN",
	"status": "ADJUST_ON",
	"title": "Vanguard Global Minimum Volatility Active ETF (Managed Fund)"
}, {
	"code": "VML",
	"status": "ADJUST_ON",
	"title": "Vital Metals Ltd"
}, {
	"code": "VMS",
	"status": "ADJUST_ON",
	"title": "Venture Minerals Ltd"
}, {
	"code": "VMT",
	"status": "ADJUST_ON",
	"title": "Vmoto Ltd"
}, {
	"code": "VMX",
	"status": "ADJUST_ON",
	"title": "Valmec Ltd"
}, {
	"code": "VMY",
	"status": "ADJUST_ON",
	"title": "Vimy Resources Ltd"
}, {
	"code": "VN8",
	"status": "ADJUST_ON",
	"title": "VONEX Ltd"
}, {
	"code": "VOC",
	"status": "ADJUST_ON",
	"title": "Vocus Group Ltd"
}, {
	"code": "VOL",
	"status": "ADJUST_ON",
	"title": "Victory Offices Ltd"
}, {
	"code": "VOR",
	"status": "ADJUST_ON",
	"title": "Vortiv Ltd"
}, {
	"code": "VPR",
	"status": "ADJUST_ON",
	"title": "Volt Power Group Ltd"
}, {
	"code": "VR1",
	"status": "ADJUST_ON",
	"title": "Vection Technologies Ltd"
}, {
	"code": "VR8",
	"status": "ADJUST_ON",
	"title": "Vanadium Resources Ltd"
}, {
	"code": "VRC",
	"status": "ADJUST_ON",
	"title": "Volt Resources Ltd"
}, {
	"code": "VRS",
	"status": "ADJUST_ON",
	"title": "Veris Ltd"
}, {
	"code": "VRT",
	"status": "ADJUST_ON",
	"title": "Virtus Health Ltd"
}, {
	"code": "VRX",
	"status": "ADJUST_ON",
	"title": "VRX Silica Ltd"
}, {
	"code": "VSO",
	"status": "ADJUST_ON",
	"title": "Vanguard MSCI Australian Small Companies INDEX ETF"
}, {
	"code": "VTG",
	"status": "ADJUST_ON",
	"title": "Vita Group Ltd"
}, {
	"code": "VTH",
	"status": "ADJUST_ON",
	"title": "Vitalharvest Freehold Trust"
}, {
	"code": "VTI",
	"status": "ADJUST_ON",
	"title": "Visioneering Technologies, Inc"
}, {
	"code": "VTS",
	"status": "ADJUST_ON",
	"title": "Vanguard US Total Market Shares INDEX ETF"
}, {
	"code": "VUK",
	"status": "ADJUST_ON",
	"title": "Virgin Money Uk Plc"
}, {
	"code": "VUL",
	"status": "ADJUST_ON",
	"title": "Vulcan Energy Resources Ltd"
}, {
	"code": "VVA",
	"status": "ADJUST_ON",
	"title": "Viva Leisure Ltd"
}, {
	"code": "VVLU",
	"status": "ADJUST_ON",
	"title": "Vanguard Global Value Equity Active ETF (Managed Fund)"
}, {
	"code": "VXR",
	"status": "ADJUST_ON",
	"title": "Venturex Resources Ltd"
}, {
	"code": "VYS",
	"status": "ADJUST_ON",
	"title": "Vysarn Ltd"
}, {
	"code": "WAA",
	"status": "ADJUST_ON",
	"title": "Wam Active Ltd"
}, {
	"code": "WAF",
	"status": "ADJUST_ON",
	"title": "West African Resources Ltd"
}, {
	"code": "WAK",
	"status": "ADJUST_ON",
	"title": "Wa Kaolin Ltd"
}, {
	"code": "WAM",
	"status": "ADJUST_ON",
	"title": "WAM Capital Ltd"
}, {
	"code": "WAT",
	"status": "ADJUST_ON",
	"title": "Waterco Ltd"
}, {
	"code": "WAX",
	"status": "ADJUST_ON",
	"title": "Wam Research Ltd"
}, {
	"code": "WBC",
	"status": "ADJUST_ON",
	"title": "Westpac Banking Corporation"
}, {
	"code": "WBE",
	"status": "SUSPEND",
	"title": "Whitebark Energy Ltd"
}, {
	"code": "WBT",
	"status": "ADJUST_ON",
	"title": "Weebit Nano Ltd"
}, {
	"code": "WC8",
	"status": "ADJUST_ON",
	"title": "Wildcat Resources Ltd"
}, {
	"code": "WCG",
	"status": "ADJUST_ON",
	"title": "Webcentral Group Ltd"
}, {
	"code": "WCMQ",
	"status": "ADJUST_ON",
	"title": "WCM Quality Global Growth Fund (Quoted Managed Fund)"
}, {
	"code": "WCN",
	"status": "ADJUST_ON",
	"title": "White Cliff Minerals Ltd"
}, {
	"code": "WDIV",
	"status": "ADJUST_ON",
	"title": "SPDR S&P Global Dividend Fund"
}, {
	"code": "WDMF",
	"status": "ADJUST_ON",
	"title": "Ishares Edge MSCI World Multifactor ETF"
}, {
	"code": "WEB",
	"status": "ADJUST_ON",
	"title": "Webjet Ltd"
}, {
	"code": "WEC",
	"status": "ADJUST_ON",
	"title": "White Energy Company Ltd"
}, {
	"code": "WEL",
	"status": "ADJUST_ON",
	"title": "Winchester Energy Ltd"
}, {
	"code": "WEMG",
	"status": "ADJUST_ON",
	"title": "SPDR S&P Emerging Markets Fund"
}, {
	"code": "WES",
	"status": "ADJUST_ON",
	"title": "Wesfarmers Ltd"
}, {
	"code": "WFL",
	"status": "ADJUST_ON",
	"title": "Wellfully Ltd"
}, {
	"code": "WGB",
	"status": "ADJUST_ON",
	"title": "Wam Global Ltd"
}, {
	"code": "WGN",
	"status": "ADJUST_ON",
	"title": "Wagners Holding Company Ltd"
}, {
	"code": "WGO",
	"status": "ADJUST_ON",
	"title": "Warrego Energy Ltd"
}, {
	"code": "WGX",
	"status": "ADJUST_ON",
	"title": "Westgold Resources Ltd"
}, {
	"code": "WHA",
	"status": "SUSPEND",
	"title": "Wattle Health Australia Ltd"
}, {
	"code": "WHC",
	"status": "ADJUST_ON",
	"title": "Whitehaven Coal Ltd"
}, {
	"code": "WHF",
	"status": "ADJUST_ON",
	"title": "Whitefield Ltd"
}, {
	"code": "WHFPA",
	"status": "ADJUST_ON",
	"title": "Whitefield Ltd"
}, {
	"code": "WHK",
	"status": "ADJUST_ON",
	"title": "Whitehawk Ltd"
}, {
	"code": "WIC",
	"status": "ADJUST_ON",
	"title": "Westoz Investment Company Ltd"
}, {
	"code": "WJA",
	"status": "ADJUST_ON",
	"title": "Wameja Ltd"
}, {
	"code": "WKT",
	"status": "SUSPEND",
	"title": "Walkabout Resources Ltd"
}, {
	"code": "WLD",
	"status": "ADJUST_ON",
	"title": "Wellard Ltd"
}, {
	"code": "WLE",
	"status": "ADJUST_ON",
	"title": "Wam Leaders Ltd"
}, {
	"code": "WMA",
	"status": "ADJUST_ON",
	"title": "Wam Alternative Assets Ltd"
}, {
	"code": "WMI",
	"status": "ADJUST_ON",
	"title": "Wam Microcap Ltd"
}, {
	"code": "WML",
	"status": "ADJUST_ON",
	"title": "Woomera Mining Ltd"
}, {
	"code": "WMX",
	"status": "ADJUST_ON",
	"title": "Wiluna Mining Corporation Ltd"
}, {
	"code": "WNB",
	"status": "SUSPEND",
	"title": "Wellness and Beauty Solutions Ltd"
}, {
	"code": "WNR",
	"status": "ADJUST_ON",
	"title": "Wingara AG Ltd"
}, {
	"code": "WOA",
	"status": "ADJUST_ON",
	"title": "Wide Open Agriculture Ltd"
}, {
	"code": "WOO",
	"status": "ADJUST_ON",
	"title": "Wooboard Technologies Ltd"
}, {
	"code": "WOR",
	"status": "ADJUST_ON",
	"title": "Worley Ltd"
}, {
	"code": "WOT",
	"status": "ADJUST_ON",
	"title": "Wotso Property"
}, {
	"code": "WOW",
	"status": "ADJUST_ON",
	"title": "Woolworths Group Ltd"
}, {
	"code": "WPL",
	"status": "ADJUST_ON",
	"title": "Woodside Petroleum Ltd"
}, {
	"code": "WPP",
	"status": "SUSPEND",
	"title": "WPP AUNZ Ltd"
}, {
	"code": "WPR",
	"status": "ADJUST_ON",
	"title": "Waypoint REIT"
}, {
	"code": "WQG",
	"status": "ADJUST_ON",
	"title": "WCM Global Growth Ltd"
}, {
	"code": "WRLD",
	"status": "ADJUST_ON",
	"title": "Betashares Managed Risk Global Share Fund (Managed Fund)"
}, {
	"code": "WRM",
	"status": "ADJUST_ON",
	"title": "White Rock Minerals Ltd"
}, {
	"code": "WSA",
	"status": "ADJUST_ON",
	"title": "Western Areas Ltd"
}, {
	"code": "WSI",
	"status": "ADJUST_ON",
	"title": "Weststar Industrial Ltd"
}, {
	"code": "WSP",
	"status": "ADJUST_ON",
	"title": "Whispir Ltd"
}, {
	"code": "WSR",
	"status": "ADJUST_ON",
	"title": "Westar Resources Ltd"
}, {
	"code": "WTC",
	"status": "ADJUST_ON",
	"title": "Wisetech Global Ltd"
}, {
	"code": "WTL",
	"status": "ADJUST_ON",
	"title": "WT Financial Group Ltd"
}, {
	"code": "WVOL",
	"status": "ADJUST_ON",
	"title": "Ishares Edge MSCI World Minimum Volatility ETF"
}, {
	"code": "WWG",
	"status": "ADJUST_ON",
	"title": "Wiseway Group Ltd"
}, {
	"code": "WWI",
	"status": "ADJUST_ON",
	"title": "West Wits Mining Ltd"
}, {
	"code": "WXHG",
	"status": "ADJUST_ON",
	"title": "SPDR S&P World Ex Australia (Hedged) Fund"
}, {
	"code": "WXOZ",
	"status": "ADJUST_ON",
	"title": "SPDR S&P World Ex Australia Fund"
}, {
	"code": "WZR",
	"status": "ADJUST_ON",
	"title": "Wisr Ltd"
}, {
	"code": "XAM",
	"status": "ADJUST_ON",
	"title": "Xanadu Mines Ltd"
}, {
	"code": "XARO",
	"status": "ADJUST_ON",
	"title": "Activex Ardea Real Outcome Bond Fund (Managed Fund)"
}, {
	"code": "XF1",
	"status": "ADJUST_ON",
	"title": "Xref Ltd"
}, {
	"code": "XRF",
	"status": "ADJUST_ON",
	"title": "XRF Scientific Ltd"
}, {
	"code": "XRO",
	"status": "ADJUST_ON",
	"title": "Xero Ltd"
}, {
	"code": "XST",
	"status": "ADJUST_ON",
	"title": "Xstate Resources Ltd"
}, {
	"code": "XTC",
	"status": "ADJUST_ON",
	"title": "Xantippe Resources Ltd"
}, {
	"code": "XTE",
	"status": "ADJUST_ON",
	"title": "Xtek Ltd"
}, {
	"code": "YAL",
	"status": "ADJUST_ON",
	"title": "Yancoal Australia Ltd"
}, {
	"code": "YANK",
	"status": "ADJUST_ON",
	"title": "Betashares Strong U.S. Dollar Fund (Hedge Fund)"
}, {
	"code": "YBR",
	"status": "ADJUST_ON",
	"title": "Yellow Brick Road Holdings Ltd"
}, {
	"code": "YFZ",
	"status": "ADJUST_ON",
	"title": "Youfoodz Holdings Ltd"
}, {
	"code": "YMAX",
	"status": "ADJUST_ON",
	"title": "Betashares Aus Top 20 Equity Yield MAX Fund (Managed Fund)"
}, {
	"code": "YOJ",
	"status": "ADJUST_ON",
	"title": "Yojee Ltd"
}, {
	"code": "YOW",
	"status": "ADJUST_ON",
	"title": "Yowie Group Ltd"
}, {
	"code": "YPB",
	"status": "ADJUST_ON",
	"title": "YPB Group Ltd"
}, {
	"code": "YRL",
	"status": "ADJUST_ON",
	"title": "Yandal Resources Ltd"
}, {
	"code": "YTMAGL",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMALD",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMANZ",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMAP1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMAPA",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMAS2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMAST",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMAZJ",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMBH1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMDO1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMDO2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMDX1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMDX2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMDX3",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF07",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF10",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF11",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF13",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF14",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF15",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF16",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMF17",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMGP1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMIP1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMLL1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMMG2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMMGR",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMMQ1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMNA1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMORG",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMQF1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMQF2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMQF3",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMQF4",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMSCP",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMSG1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMSG2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMSG3",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMTCL",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMTL1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMTL2",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMTLS",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMVC1",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMVCX",
	"status": "ADJUST_ON",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMWB1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "YTMWE1",
	"status": "SUSPEND",
	"title": "Equity Trustees Ltd"
}, {
	"code": "ZIP",
	"status": "ADJUST_ON",
	"title": "ZIP Co Ltd"
}, {
	"code": "ZAG",
	"status": "ADJUST_ON",
	"title": "Zuleika Gold Ltd"
}, {
	"code": "ZBT",
	"status": "ADJUST_ON",
	"title": "ZEBIT Inc"
}, {
	"code": "ZEL",
	"status": "ADJUST_ON",
	"title": "Z Energy Ltd"
}, {
	"code": "ZEO",
	"status": "ADJUST_ON",
	"title": "Zeotech Ltd"
}, {
	"code": "ZER",
	"status": "ADJUST_ON",
	"title": "ZETA Resources Ltd"
}, {
	"code": "ZEU",
	"status": "ADJUST_ON",
	"title": "ZEUS Resources Ltd"
}, {
	"code": "ZGL",
	"status": "ADJUST_ON",
	"title": "ZICOM Group Ltd"
}, {
	"code": "ZIM",
	"status": "ADJUST_ON",
	"title": "Zimplats Holdings Ltd"
}, {
	"code": "ZLD",
	"status": "ADJUST_ON",
	"title": "Zelira Therapeutics Ltd"
}, {
	"code": "ZMI",
	"status": "ADJUST_ON",
	"title": "ZINC of Ireland NL"
}, {
	"code": "ZMM",
	"status": "ADJUST_ON",
	"title": "ZIMI Ltd"
}, {
	"code": "ZNC",
	"status": "ADJUST_ON",
	"title": "Zenith Minerals Ltd"
}, {
	"code": "ZNO",
	"status": "ADJUST_ON",
	"title": "ZOONO Group Ltd"
}, {
	"code": "ZYAU",
	"status": "ADJUST_ON",
	"title": "ETFs S&P\/ASX 300 High Yield Plus ETF"
}, {
	"code": "ZYUS",
	"status": "ADJUST_ON",
	"title": "ETFs S&P 500 High Yield Low Volatility ETF"
}];


define("ASX_CODES", ASX_CODES);