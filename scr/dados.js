const dados = [
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "CUBÍCULOS DE MÉDIA TENSÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "DISJUNTOR ON BOARD"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "CENTRO DE DISTRIBUIÇÃO DE CARGAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "CENTRO DE CONTROLE DE MOTORES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "PAINEL DE DITRIBUIÇÃO DE CARGAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "PAINEL DE BANCO DE CAPACITORES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "QUADRO DE DISTRIBUIÇÃO, ILUMINAÇÃO E COMANDO SOBREPOR"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "CAIXA DE JUNÇÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "PAINEL DE PROTEÇÃO E CONTROLE, COMANDO E MEDIÇÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "PAINEL DE TELECOM"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "RETROFIT DE PANÉIS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "12",
        "DESCRIÇÃO3": "SOBRESSALENTES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA LM - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA LM - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "KIT DE CABOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "NO-BREAK MONOFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "MONOFÁSICO - MERCADO NACIONAL"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA LTM - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA LTM - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "KIT DE CABOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK TRI-MONOFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "TRI-MONOFÁSICO - MERCADO NACIONAL"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "LINHA TTS - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "LINHA TTS - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "LINHA TTM"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "BANCO DE BATERIAS - FORA DO PADRÃO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "SISTEMAS COMPLETOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "KIT DE CABOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "NO-BREAK TRIFÁSICO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "TRIFÁSICO - MERCADO NACIONAL"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "SNMP"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "CONTATOS SECOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "PARALELISMO"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "CARREGADOR ADICIONAL"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "05",
        "DESCRIÇÃO2": "NOBREAK - COMUNICAÇÃO E ACESSÓRIOS",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TRILHOS E DEMAIS ITENS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "RETIFICADORES TIRISTORIZADOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PARTES E PEÇAS RETIFICADORES TIRISTORIZADOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "RETIFICADORES MODULARES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "06",
        "DESCRIÇÃO2": "RETIFICADORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "PARTES E PEÇAS RETIFICADORES MODULARES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "07",
        "DESCRIÇÃO2": "INVERSORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "INVERSORES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "08",
        "DESCRIÇÃO2": "ATS / STS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "ATS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "08",
        "DESCRIÇÃO2": "ATS / STS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "STS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "TRANSFORMADORES DE MT"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ATM - (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "TIM - (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "ATT - (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "TIT - (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "ATT/TIT - BCR (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "09",
        "DESCRIÇÃO2": "TRANSFORMADORES",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "TRANSF. ESPECIAIS (PA)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "GABINENTES DE BATERIAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "PACK DE BATERIAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "RACK DE BATERIAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GABIENTE MODULARES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "ESTANTES DE BATERIAS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "QUADROS DE SOBREPOR"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "PAINÉIS AUTOPORTANTES"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "10",
        "DESCRIÇÃO2": "METALURGIA",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "CAIXA DE ABRIGO DE TRANSFORMADOR (CAT)"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "11",
        "DESCRIÇÃO2": "MATERIAIS ELÉTRICOS E ACESSÓRIOS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "MATERIAIS ELÉTRICOS DIVERSOS"
    },
    {
        "TIPO": "01",
        "DESCRIÇÃO": "PA - PRODUTO ACABADO",
        "GRUPO": "11",
        "DESCRIÇÃO2": "MATERIAIS ELÉTRICOS E ACESSÓRIOS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "ACESSÓRIOS ELETROMECÂNICOS"
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PAINÉIS",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "02",
        "DESCRIÇÃO2": "GERADOR",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "02",
        "DESCRIÇÃO": "ME - MERCADORIA",
        "GRUPO": "03",
        "DESCRIÇÃO2": "NO-BREAK",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUÇÃO PAINÉIS",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "02",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "BATERIAS ACTPOWER"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "02",
        "DESCRIÇÃO2": "BATERIAS",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "BATERIAS MERCADO NACIONAL"
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "03",
        "DESCRIÇÃO2": "PRODUÇÃO NOBREAK",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "04",
        "DESCRIÇÃO2": "PRODUÇÃO TRANSFORMADORES",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "03",
        "DESCRIÇÃO": "MP - MATERIA PRIMA",
        "GRUPO": "05",
        "DESCRIÇÃO2": "PRODUÇÃO METALURGIA",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PAINEIS E QUADROS (ANTIGO 4188)"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "QUADRO DE SOBREPOR (PADRÃO)"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "ESTANTES DE BATERIAS"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "GABINETES MODULARES"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "GABINENTES DE BATERIAS"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "PACK'S DE BATERIAS"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "07",
        "DESCRIÇÃO3": "RACKS DE BATERIAS"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "08",
        "DESCRIÇÃO3": "CAT"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "09",
        "DESCRIÇÃO3": "BOTAS"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "10",
        "DESCRIÇÃO3": "TRAFO PADRÃO NO-BREAK"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "11",
        "DESCRIÇÃO3": "TRAFO EM CAT OU BOTA"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUTO FINAL ACABADO",
        "SUBGRUPO": "12",
        "DESCRIÇÃO3": "TRAFO ESPECIAL"
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "PEÇAS INTERMEDIARIAS METALURGIA",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "04",
        "DESCRIÇÃO": "PI - PRODUTO INTERMEDIARIO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "PEÇAS INTERMEDIARIAS TRANSFORMADOR",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "PRODUÇÃO",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "ADMINISTRATIVO",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "LOGISTICA",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "05",
        "DESCRIÇÃO": "MC - MATERIAL DE CONSUMO",
        "GRUPO": "04",
        "DESCRIÇÃO2": "UNIFORME E EPI",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "FERRAMENTAS E MAQUINAS",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "ADMINISTRATIVO",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "06",
        "DESCRIÇÃO": "AI - ATIVO IMOBILIZADO",
        "GRUPO": "03",
        "DESCRIÇÃO2": "LOGISTICA / FROTA",
        "SUBGRUPO": "00",
        "DESCRIÇÃO3": ""
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "COMPRA SERVIÇO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PINTURA"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "COMPRA SERVIÇO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "COMISSÃO"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "COMPRA SERVIÇO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "VINCULADO A PEDIDOS E CONTRATOS"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "01",
        "DESCRIÇÃO2": "COMPRA SERVIÇO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "MANUTENÇÃO"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "01",
        "DESCRIÇÃO3": "PAINEL"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "02",
        "DESCRIÇÃO3": "NO-BREAK"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "03",
        "DESCRIÇÃO3": "INSTALAÇÃO"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "04",
        "DESCRIÇÃO3": "MANUTENÇÃO PREVENTIVA"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "05",
        "DESCRIÇÃO3": "MANUTENÇÃO CORRETIVA"
    },
    {
        "TIPO": "07",
        "DESCRIÇÃO": "CS - SERVIÇO",
        "GRUPO": "02",
        "DESCRIÇÃO2": "VENDA SERVIÇO",
        "SUBGRUPO": "06",
        "DESCRIÇÃO3": "VISTORIA"
    }
]
