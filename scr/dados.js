const dados = [
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CUBÍCULOS DE MÉDIA TENSÃO",
        "CÓDIGO HDS": "5010"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "DISJUNTOR ON BOARD",
        "CÓDIGO HDS": "5010"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "CENTRO DE DISTRIBUIÇÃO DE CARGAS",
        "CÓDIGO HDS": "5011"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "CENTRO DE CONTROLE DE MOTORES",
        "CÓDIGO HDS": "5012"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "PAINEL DE DITRIBUIÇÃO DE CARGAS",
        "CÓDIGO HDS": "5013"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "PAINEL DE BANCO DE CAPACITORES",
        "CÓDIGO HDS": "5014"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "QUADRO DE DISTRIBUIÇÃO, ILUMINAÇÃO E COMANDO SOBREPOR",
        "CÓDIGO HDS": "5015"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "CAIXA DE JUNÇÃO",
        "CÓDIGO HDS": "5015"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "PAINEL DE PROTEÇÃO E CONTROLE, COMANDO E MEDIÇÃO",
        "CÓDIGO HDS": "5017"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "PAINEL DE TELECOM",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "RETROFIT DE PANÉIS",
        "CÓDIGO HDS": "5020"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "12",
        "DESCRIÇÃO3": "SOBRESSALENTES",
        "CÓDIGO HDS": "5021"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA LM - PADRÃO",
        "CÓDIGO HDS": "5110"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA LM - FORA DO PADRÃO",
        "CÓDIGO HDS": "5115"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - INTERNO - PADRÃO",
        "CÓDIGO HDS": "5122"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - EXTERNO - PADRÃO",
        "CÓDIGO HDS": "5120, 5121"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO",
        "CÓDIGO HDS": "5140"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "KIT DE CABOS",
        "CÓDIGO HDS": "5913"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA LTM - PADRÃO",
        "CÓDIGO HDS": "5110"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA LTM - FORA DO PADRÃO",
        "CÓDIGO HDS": "5115"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - INTERNO - PADRÃO",
        "CÓDIGO HDS": "5122"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - EXTERNO - PADRÃO",
        "CÓDIGO HDS": "5120, 5121"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO",
        "CÓDIGO HDS": "5140"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "KIT DE CABOS",
        "CÓDIGO HDS": "5913"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA TTS - PADRÃO",
        "CÓDIGO HDS": "5210"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA TTS - FORA DO PADRÃO",
        "CÓDIGO HDS": "5230"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "LINHA TTM",
        "CÓDIGO HDS": "5211"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - INTERNO - PADRÃO",
        "CÓDIGO HDS": "5252"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - EXTERNO - PADRÃO",
        "CÓDIGO HDS": "5250, 5251"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO",
        "CÓDIGO HDS": "5280"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "KIT DE CABOS",
        "CÓDIGO HDS": "5913"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "SNMP",
        "CÓDIGO HDS": "5114"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "CONTATOS SECOS",
        "CÓDIGO HDS": "5114"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "PARALELISMO",
        "CÓDIGO HDS": "5114"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "CARREGADOR ADICIONAL",
        "CÓDIGO HDS": "5114"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TRILHOS E DEMAIS ITENS",
        "CÓDIGO HDS": "5114"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "RETIFICADORES TIRISTORIZADOS",
        "CÓDIGO HDS": "5310"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PARTES E PEÇAS RETIFICADORES TIRISTORIZADOS",
        "CÓDIGO HDS": "5311"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "RETIFICADORES MODULARES",
        "CÓDIGO HDS": "5312"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "PARTES E PEÇAS RETIFICADORES MODULARES",
        "CÓDIGO HDS": "5313"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "07",
        "DESCRIÇÃO2": "INVERSORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "INVERSORES",
        "CÓDIGO HDS": "5510"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "08",
        "DESCRIÇÃO2": "ATS / STS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "ATS",
        "CÓDIGO HDS": "5520"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "08",
        "DESCRIÇÃO2": "ATS / STS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "STS",
        "CÓDIGO HDS": "5520"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "TRANSFORMADORES DE MT",
        "CÓDIGO HDS": "5610"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ATM - (PA)",
        "CÓDIGO HDS": "7811"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TIM - (PA)",
        "CÓDIGO HDS": "7821"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "ATT - (PA)",
        "CÓDIGO HDS": "7831"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TIT - (PA)",
        "CÓDIGO HDS": "7841"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "ATT/TIT - BCR (PA)",
        "CÓDIGO HDS": "7851"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "TRANSF. ESPECIAIS COM CAT - (PA)",
        "CÓDIGO HDS": "7862"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "TRANSF. ESPECIAIS SEM CAT - (PA)",
        "CÓDIGO HDS": "7861"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "TRANSFORMADORES ESPECIAIS",
        "CÓDIGO HDS": "5616"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "GABINENTES DE BATERIAS",
        "CÓDIGO HDS": "5710"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PACK DE BATERIAS",
        "CÓDIGO HDS": "5710"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "RACK DE BATERIAS",
        "CÓDIGO HDS": "5710"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GABIENTE MODULARES",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "ESTANTES DE BATERIAS",
        "CÓDIGO HDS": "5711"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "QUADROS DE SOBREPOR",
        "CÓDIGO HDS": "5712"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "PAINÉIS AUTOPORTANTES",
        "CÓDIGO HDS": "5713"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "CAIXA DE ABRIGO DE TRANSFORMADOR (CAT)",
        "CÓDIGO HDS": "5714"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "11",
        "DESCRIÇÃO2": "MATERIAIS ELÉTRICOS E ACESSÓRIOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MATERIAIS ELÉTRICOS DIVERSOS",
        "CÓDIGO HDS": "5910"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "11",
        "DESCRIÇÃO2": "MATERIAIS ELÉTRICOS E ACESSÓRIOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ACESSÓRIOS ELETROMECÂNICOS",
        "CÓDIGO HDS": "5911"
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "EQUIPAMENTOS DE TERCEIROS",
        "CÓDIGO HDS": "5099"
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "02",
        "DESCRIÇÃO2": "GERADOR",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PEÇAS GRUPO GERADOR",
        "CÓDIGO HDS": "5810"
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MAQUINAS PARA MANUTENÇÃO",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "BATERIAS SECPOWER             ",
        "CÓDIGO HDS": "7303"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "BATERIAS POWERSAFE            ",
        "CÓDIGO HDS": "7304"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "BATERIAS HOPPCKE              ",
        "CÓDIGO HDS": "7305"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BATERIAS FREEDOM              ",
        "CÓDIGO HDS": "7306"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BATERIA DURACELL              ",
        "CÓDIGO HDS": "7307"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "BATERIAS MHB                  ",
        "CÓDIGO HDS": "7309"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "BATERIAS GENÉRICAS",
        "CÓDIGO HDS": "7310"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK E ACESSÓRIOS - IMPORTADOS",
        "SUBGRUPO": "",
        "DESCRIÇÃO3": "",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK E ACESSÓRIOS - NACIONAIS",
        "SUBGRUPO": "",
        "DESCRIÇÃO3": "",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "SISTEMAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "ATS",
        "CÓDIGO HDS": "7350"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "SISTEMAS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "STS",
        "CÓDIGO HDS": "7351"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "SISTEMAS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ESTABILIZADORES",
        "CÓDIGO HDS": "7352"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "SISTEMAS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GERADORES",
        "CÓDIGO HDS": "7353"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "SISTEMAS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "RETIFICADORES",
        "CÓDIGO HDS": "7354"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MINI-DISJUNTORES E ACESSÓRIOS",
        "CÓDIGO HDS": "7401"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "DISJUNTORES CAIXA MOLDADA E ACESSÓRIOS",
        "CÓDIGO HDS": "7402"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "DISJUNTORES CAIXA ABERTA E ACESSÓRIOS",
        "CÓDIGO HDS": "7403"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "DISJUNTOR MOTOR E ACESSÓRIOS",
        "CÓDIGO HDS": "7404"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "DPS",
        "CÓDIGO HDS": "7405"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "FUSIVEÍS BAIXA TENSÃO",
        "CÓDIGO HDS": "7406"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "DR",
        "CÓDIGO HDS": "7407"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PROTEÇÃO CIRCUITOS",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "RELÉ TÉRMICO",
        "CÓDIGO HDS": "7408"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "06",
        "DESCRIÇÃO2": "MANOBRA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "SECCIONADORES",
        "CÓDIGO HDS": "7416"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "06",
        "DESCRIÇÃO2": "MANOBRA",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "COMUTADORES",
        "CÓDIGO HDS": "7417"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "06",
        "DESCRIÇÃO2": "MANOBRA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "CONTATORES",
        "CÓDIGO HDS": "7418"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MULTIFUNÇÃO (SUB E SOBRE)",
        "CÓDIGO HDS": "7424"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "CORRENTE",
        "CÓDIGO HDS": "7425"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TENSÃO",
        "CÓDIGO HDS": "7426"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "TEMPERATURA",
        "CÓDIGO HDS": "7427"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BLOQUEIO",
        "CÓDIGO HDS": "7428"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "07",
        "DESCRIÇÃO2": "RELÉ DE PROTEÇÃO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "NÍVEL",
        "CÓDIGO HDS": "7429"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "08",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "TP - BAIXA TENSÃO",
        "CÓDIGO HDS": "7436"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "08",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "TC - BAIXA TENSÃO",
        "CÓDIGO HDS": "7435"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "08",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TRAFO COMANDO",
        "CÓDIGO HDS": "7437"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "08",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "TRANSFORMADORES EM GERAL",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MULTIMEDIDORES",
        "CÓDIGO HDS": "7440"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "INDICADOR DIGITAL",
        "CÓDIGO HDS": "7441"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "INDICADOR ANALÓGICO",
        "CÓDIGO HDS": "7442"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "TRANSDUTORES",
        "CÓDIGO HDS": "7443"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "SHUNT",
        "CÓDIGO HDS": "7444"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "09",
        "DESCRIÇÃO2": "INSTRUMENTAÇÃO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "BLOCO DE TESTES",
        "CÓDIGO HDS": "7461"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "10",
        "DESCRIÇÃO2": "AUTOMAÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "FONTE DE ALIMENTAÇÃO",
        "CÓDIGO HDS": "7448"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "10",
        "DESCRIÇÃO2": "AUTOMAÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "CLP",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "10",
        "DESCRIÇÃO2": "AUTOMAÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "INVERSOR DE FREQUENCIA",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "10",
        "DESCRIÇÃO2": "AUTOMAÇÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "SOFT-STARTER",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO, COMANDO GERAL",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "BORNES",
        "CÓDIGO HDS": "7473"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "RELÉ INTERFACE E MINI CONTATORES",
        "CÓDIGO HDS": "7456"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "RELÉ TEMPORIZADO",
        "CÓDIGO HDS": "7457"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "SINALEIROS E BOTÕES",
        "CÓDIGO HDS": "7458, 7459"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "COMUTADORES",
        "CÓDIGO HDS": "7460"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "PROGRAMADOR HORARIO",
        "CÓDIGO HDS": "7463"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "11",
        "DESCRIÇÃO2": "SINALIZAÇÃO E COMANDO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "TOMADAS MULTIPLOS POLOS",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "12",
        "DESCRIÇÃO2": "SERV. AUXILIAR",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "ILUMINAÇÃO E AQUECIMENTO",
        "CÓDIGO HDS": "7471"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "12",
        "DESCRIÇÃO2": "SERV. AUXILIAR",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "FIM DE CURSO",
        "CÓDIGO HDS": "7462"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "12",
        "DESCRIÇÃO2": "SERV. AUXILIAR",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TOMADAS",
        "CÓDIGO HDS": "7472"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "12",
        "DESCRIÇÃO2": "SERV. AUXILIAR",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "TOMADAS INDUSTRIAIS",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CAPACITORES",
        "CÓDIGO HDS": "7486"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "RESISTORES",
        "CÓDIGO HDS": "7487"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "DIODO E DISSIPADORES",
        "CÓDIGO HDS": "7488"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "TRANSISTORES",
        "CÓDIGO HDS": "7489"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "VARISTORES",
        "CÓDIGO HDS": "7490"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "CI",
        "CÓDIGO HDS": "7491"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "13",
        "DESCRIÇÃO2": "COMPONENTES ELETRÔNICOS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "DEMAIS COMPONENTES ELETRÔNICOS",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "14",
        "DESCRIÇÃO2": "CLIMATIZAÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "VENTILADOR / EXAUSTOR E CONJUNTOS",
        "CÓDIGO HDS": "7576"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "14",
        "DESCRIÇÃO2": "CLIMATIZAÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "GRELHAS / VENEZIANAS E FILTROS",
        "CÓDIGO HDS": "7577"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "TP - MÉDIA TENSÃO",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "TC - MÉDIA TENSÃO",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "DISJUNTOR MÉDIA TENSÃO",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "SECCIONADORES MÉDIA TENSÃO",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "FUSIVEIS MÉDIA TENSÃO",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "15",
        "DESCRIÇÃO2": "MÉDIA TENSÃO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "IMPORTAÇÃO MÉDIA TENSÃO",
        "CÓDIGO HDS": "7463"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CALHAS",
        "CÓDIGO HDS": "7474"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "TRILHOS",
        "CÓDIGO HDS": "7475"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "DOBRADIÇA",
        "CÓDIGO HDS": "7584"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "FECHOS",
        "CÓDIGO HDS": "7585"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "PRENSA CABO",
        "CÓDIGO HDS": "7477"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "TAMPÃO",
        "CÓDIGO HDS": "7478"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "RODIZIO",
        "CÓDIGO HDS": "7589"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "GARRAS",
        "CÓDIGO HDS": "7586"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "16",
        "DESCRIÇÃO2": "ACESSÓRIOS MECÂNICOS",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "BORRACHAS DE VEDAÇÃO",
        "CÓDIGO HDS": "7556"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "17",
        "DESCRIÇÃO2": "CONDUTORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CABOS",
        "CÓDIGO HDS": "7501"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "17",
        "DESCRIÇÃO2": "CONDUTORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "TERMINAIS P/ CABOS",
        "CÓDIGO HDS": "7502"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "17",
        "DESCRIÇÃO2": "CONDUTORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ID PARA CABOS",
        "CÓDIGO HDS": "7503"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "17",
        "DESCRIÇÃO2": "CONDUTORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "ABRAÇ E ESPIRAL",
        "CÓDIGO HDS": "7476"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "17",
        "DESCRIÇÃO2": "CONDUTORES",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "CORDOALHAS",
        "CÓDIGO HDS": "7504"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "18",
        "DESCRIÇÃO2": "BARRAMENTO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "BARRA DE COBRE",
        "CÓDIGO HDS": "7525"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "18",
        "DESCRIÇÃO2": "BARRAMENTO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "BARRA DE ALUMINIO",
        "CÓDIGO HDS": "7526"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "19",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "METALURGIA (MP)",
        "CÓDIGO HDS": "7534"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PARAFUSOS",
        "CÓDIGO HDS": "7541"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ARRUELAS E PORCAS",
        "CÓDIGO HDS": "7542, 7543"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "REBITES",
        "CÓDIGO HDS": "7544"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BARRA ROSCADA",
        "CÓDIGO HDS": "7545"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "CHUMBADOR",
        "CÓDIGO HDS": "7546"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "20",
        "DESCRIÇÃO2": "ELEMENTOS DE FIXAÇÃO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "OLHAL DE IÇAMENTO",
        "CÓDIGO HDS": "7547"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "21",
        "DESCRIÇÃO2": "SINALIZAÇÃO / IDENTIFICAÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PLACA DE INOX",
        "CÓDIGO HDS": "7509"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "21",
        "DESCRIÇÃO2": "SINALIZAÇÃO / IDENTIFICAÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PLACA DE ALUMÍNIO",
        "CÓDIGO HDS": "7510"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "21",
        "DESCRIÇÃO2": "SINALIZAÇÃO / IDENTIFICAÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ADESIVOS E ETIQUETAS",
        "CÓDIGO HDS": "7513"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "AÇO CARBONO",
        "CÓDIGO HDS": "7517"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "AÇO GALVANIZADO A FRIO",
        "CÓDIGO HDS": "7518"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ALUMINIO",
        "CÓDIGO HDS": "7519"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "PERFIL / TUBO DE AÇO CARBONO",
        "CÓDIGO HDS": "7520"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TELAS",
        "CÓDIGO HDS": "7521"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "22",
        "DESCRIÇÃO2": "CHAPAS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "INOX",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "23",
        "DESCRIÇÃO2": "ISOLANTES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PREMIX",
        "CÓDIGO HDS": "7561"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "23",
        "DESCRIÇÃO2": "ISOLANTES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "POLICARBONATO/PETG",
        "CÓDIGO HDS": "7562"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "23",
        "DESCRIÇÃO2": "ISOLANTES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ACRILICO",
        "CÓDIGO HDS": "7566"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "24",
        "DESCRIÇÃO2": "EMBALAGEM",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MADEIRA",
        "CÓDIGO HDS": "7568"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "24",
        "DESCRIÇÃO2": "EMBALAGEM",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PLASTICO",
        "CÓDIGO HDS": "7569"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "24",
        "DESCRIÇÃO2": "EMBALAGEM",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "PAPEL",
        "CÓDIGO HDS": "7570"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "25",
        "DESCRIÇÃO2": "QUADROS E PAINEIS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "QUADROS DE SOBREPOR (MP)",
        "CÓDIGO HDS": "7592"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "25",
        "DESCRIÇÃO2": "QUADROS E PAINEIS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "QUADROS DE ALUMINIO FUNDIDO",
        "CÓDIGO HDS": "7592"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "25",
        "DESCRIÇÃO2": "QUADROS E PAINEIS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TINTAS EPOXI EM PÓ",
        "CÓDIGO HDS": "7593"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CHAPA AÇO SILICIO",
        "CÓDIGO HDS": "7632"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "FIOS AWG ALUMINIO",
        "CÓDIGO HDS": "7505"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "FIOS AWG COBRE",
        "CÓDIGO HDS": "7506"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "CADARÇO",
        "CÓDIGO HDS": "7560"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "PERFIL PUTRULDADO",
        "CÓDIGO HDS": "7560"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "NYLON",
        "CÓDIGO HDS": "7563"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "FENOLITE",
        "CÓDIGO HDS": "7564"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "THERNOMID",
        "CÓDIGO HDS": "7565"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "ESPAGUETE",
        "CÓDIGO HDS": "7567"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "ETIQUETA IDENTIFICAÇÃO TRAFO",
        "CÓDIGO HDS": "7513"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "26",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "NUCLEO PARA TRANSFORMADORES",
        "CÓDIGO HDS": "7635"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PAINEIS E QUADROS (ANTIGO 4188)",
        "CÓDIGO HDS": "4188"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ESTANTES DE BATERIAS",
        "CÓDIGO HDS": "7601"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "GABINETES MODULARES",
        "CÓDIGO HDS": "7602"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GABINENTES DE BATERIAS",
        "CÓDIGO HDS": "7602"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "PACK'S DE BATERIAS",
        "CÓDIGO HDS": "7602"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "RACKS DE BATERIAS",
        "CÓDIGO HDS": "7602"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "CAT",
        "CÓDIGO HDS": "7603"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "BOTAS",
        "CÓDIGO HDS": "7603"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "QUADRO DE SOBREPOR (PADRÃO)",
        "CÓDIGO HDS": "4188"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "PROTOTIPOS",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "ATM - PADRÃO PARA NO-BREAK",
        "CÓDIGO HDS": "7711"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "TIM - PADRÃO PARA NO-BREAK",
        "CÓDIGO HDS": "7721"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "12",
        "DESCRIÇÃO3": "ATT - PADRÃO PARA NO-BREAK",
        "CÓDIGO HDS": "7731"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "13",
        "DESCRIÇÃO3": "TIT - PADRÃO PARA NO-BREAK",
        "CÓDIGO HDS": "7741"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "14",
        "DESCRIÇÃO3": "ATT/TIT - BCR - PADRÃO NO-BREAK",
        "CÓDIGO HDS": "7751"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "15",
        "DESCRIÇÃO3": "TRANSF. ESPECIAIS PADRÃO NO-BREAK",
        "CÓDIGO HDS": "7761"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "16",
        "DESCRIÇÃO3": "ATM - PADRÃO PARA NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7911"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "17",
        "DESCRIÇÃO3": "TIM - PADRÃO PARA NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7921"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "18",
        "DESCRIÇÃO3": "ATT - PADRÃO PARA NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7931"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "19",
        "DESCRIÇÃO3": "TIT - PADRÃO PARA NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7941"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "20",
        "DESCRIÇÃO3": "ATT/TIT - BCR - PADRÃO NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7951"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "21",
        "DESCRIÇÃO3": "TRANSF. ESPECIAIS PADRÃO NO-BREAK - EM CAT OU BOTA",
        "CÓDIGO HDS": "7961"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTOS PADRÕES (PRODUTO FINAL)",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "BLOQUEIOS DE BY-PASS",
        "CÓDIGO HDS": "4166"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "PEÇAS DE METALURGIA PADRÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PARTES DE FECHOS E DOBRADIÇAS",
        "CÓDIGO HDS": "4166"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "PEÇAS DE METALURGIA PADRÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TRILHOS E PEÇAS MOVEIS DE NO-BREAK",
        "CÓDIGO HDS": "4166"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "PEÇAS DE METALURGIA PADRÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "OLHAL DE SUSPENSÃO",
        "CÓDIGO HDS": "4166"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "PEÇAS DE METALURGIA PADRÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "DEMAIS PEÇAS",
        "CÓDIGO HDS": "4166"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "PEÇAS INTERMEDIARIA S/ PADRÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "INDUSTRIALIZAÇÃO",
        "CÓDIGO HDS": "4199"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "ACO CARBONO TRAFO - (PI)",
        "CÓDIGO HDS": "7631"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ACO SILICIO TRAFO - (PI)",
        "CÓDIGO HDS": "7632"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TIRANTES TRAFO - (PI)",
        "CÓDIGO HDS": "7633"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "ALUMINIO - (PI)",
        "CÓDIGO HDS": "7634"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BARRA ALUMINIO TRAFO - (PI)",
        "CÓDIGO HDS": "7643"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "FIBRA DE VIDRO - (PI)",
        "CÓDIGO HDS": "7650"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "FENOLITE TRAFO - (PI)",
        "CÓDIGO HDS": "7652"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "THERNOMID - (PI)",
        "CÓDIGO HDS": "7653"
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PEÇAS PRODUÇÃO TRANSFORMADOR",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "FENOLITE - (PI)",
        "CÓDIGO HDS": "7654"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "FERRAMENTAS MONTAGEM / INSPEÇÃO",
        "CÓDIGO HDS": "9501"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "UNIFORME / EPI",
        "CÓDIGO HDS": "9503"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "FITA",
        "CÓDIGO HDS": "9505"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GRAXAS E VASELINAS",
        "CÓDIGO HDS": "9506"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "COLAS",
        "CÓDIGO HDS": "9507"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "SILICONES",
        "CÓDIGO HDS": "9508"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "VERNIS / SOLVENTE",
        "CÓDIGO HDS": "9509"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "TINTAS EM SPRAY",
        "CÓDIGO HDS": "-"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "COMBUSTIVEIS E LUBRIFICANTES",
        "CÓDIGO HDS": "9516"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "LOCAÇÃO / COMODATO",
        "CÓDIGO HDS": "9518"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS / CONSUMIVEIS DE TRABALHO",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "USO E CONSUMO PRODUCAO",
        "CÓDIGO HDS": "9511"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MATERIAL DE LIMPEZA",
        "CÓDIGO HDS": "9502"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "MATERIAL DE EXPEDIENTE",
        "CÓDIGO HDS": "9511"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "MATERIAL DE CONSUMO ADMINISTRATIVO",
        "CÓDIGO HDS": "9510"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "MANUTENÇÃO INTERNA",
        "CÓDIGO HDS": "9512"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "MANUTENÇÃO DE VEICULOS",
        "CÓDIGO HDS": "9513"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "PRODUTOS ALIMENTICIOS",
        "CÓDIGO HDS": "9514"
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "CONSUMIVEIS DIA A DIA / MANUTENÇÃO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "GAS",
        "CÓDIGO HDS": "9515"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "ELETRONICOS E INFORMATICA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "EQUIPAMENTOS INFORMATICA",
        "CÓDIGO HDS": "9601"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "ELETRONICOS E INFORMATICA",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "EQUIPAMENTOS DE ESCRITORIO",
        "CÓDIGO HDS": "9602"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "ELETRONICOS E INFORMATICA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "SOFTWARE",
        "CÓDIGO HDS": "9606"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "OBRAS E EQUIPAMENTOS GERAIS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MOVEIS",
        "CÓDIGO HDS": "9603"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "OBRAS E EQUIPAMENTOS GERAIS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "OBRAS E EQUIPAMENTOS",
        "CÓDIGO HDS": "9609"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "OBRAS E EQUIPAMENTOS GERAIS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "SEGURANÇA NO TRABALHO",
        "CÓDIGO HDS": "9608"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "FERRAMENTAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "FERRAMENTAS / EQUIPAMENTOS PRODUÇÃO",
        "CÓDIGO HDS": "9601"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "FERRAMENTAS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "FERRAMENTAS / EQUIPAMENTOS TECNICOS",
        "CÓDIGO HDS": "9602"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "FERRAMENTAS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "FERRAMENTAS / EQUIPAMENTOS TESTES",
        "CÓDIGO HDS": "9602"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "VEICULOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "VEICULOS",
        "CÓDIGO HDS": "9607"
    },
    {
        "TIPO": "08",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "SERVIÇOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CS DE SERVIÇO",
        "CÓDIGO HDS": "9998"
    },
    {
        "TIPO": "09",
        "DESCRIÇÃO": "MO - MOD",
        "GRUPO": "01",
        "DESCRIÇÃO2": "HORAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MOD DE HORAS",
        "CÓDIGO HDS": ""
    },
    {
        "TIPO": "10",
        "DESCRIÇÃO": "FS - VENDA SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "SERVIÇOS VENDA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "VENDA SERVIÇOS",
        "CÓDIGO HDS": ""
    }
]