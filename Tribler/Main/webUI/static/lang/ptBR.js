/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Arquivos Torrent||*.torrent||Todos arquivos (*.*)||*.*||"
	, "OK"
	, "Cancelar"
	, "Aplicar"
	, "Sim"
	, "Não"
	, "Fechar"
	, "Preferências"
	, "Idioma"
	, "Idioma:"
	, "Privacidade"
	, "Verificar atualizações automaticamente"
	, "Atualizar para versões betas"
	, "Enviar informações anômimas quando verificar atualizações"
	, "Baixando"
	, "Adicionar .!ut aos arq. incompletos"
	, "Pré-alocar todos arquivos"
	, "Previnir modo standby se houver torrents ativos"
	, "Opções de Exibição"
	, "Confirmar ao excluir torrents"
	, "Confirmar ao excluir rastreadores"
	, "Pedir confirmação ao sair"
	, "Alternar cor de fundo na lista"
	, "Mostrar velocidade na barra título"
	, "Exibir lim. de veloc. na barra de status"
	, "Enquanto adiciona torrents"
	, "Não iniciar o download automaticamente"
	, "Ativar a janela do programa"
	, "Mostrar janela que apresenta os arquivos dentro do torrent"
	, "Ações para Clique Duplo"
	, "Em torrents sendo enviados:"
	, "Em torrents sendo baixados:"
	, "Localização dos Arquivos Baixados"
	, "Novos downloads em:"
	, "Exibir diálogo ao adicionar torrent"
	, "Mover downloads completos para:"
	, "Acrescentar a categoria do torrent"
	, "Somente mover do diretório padrão de downloads"
	, "Localização de .torrents"
	, "Armazenar .torrent em:"
	, "Mover .torrents finalizados para:"
	, "Abrir .torrents automat. da pasta:"
	, "Excluir torrent carregados"
	, "Modo de Escuta na Porta"
	, "Porta usada para conexões de entrada:"
	, "Porta Aleatória"
	, "Alternar porta a cada início"
	, "Habilitar mapeamento UPnP"
	, "Habilitar mapeamento NAT-PMP"
	, "Servidor Proxy"
	, "Tipo:"
	, "Proxy:"
	, "Porta:"
	, "Autenticação"
	, "Usuário:"
	, "Senha:"
	, "Resolver hostname através de proxy"
	, "Use servidor proxy para conexões ponto-a-ponto"
	, "Adicionar às exceções do Firewall do Windows"
	, "Privacidade de Proxy"
	, "Desativar pesquisa de DNS local"
	, "Desativar recursos que enviam informações de identificação"
	, "Desativar conexões não suportadas pelo proxy"
	, "Limite da Taxa de Upload Global"
	, "Taxa de upload Máx. (kB/s): [0: ilimitada]"
	, "Automático"
	, "Taxa de upload quando não houver downloads (kB/s):"
	, "Limite da Taxa de Download Global"
	, "Taxa de Download Máx. (kB/s): [0: ilimitada]"
	, "Número de Conexões"
	, "Número máximo de conexões:"
	, "Número máximo de peers conectados por torrent:"
	, "Número de slots para upload por torrent:"
	, "Usar slots adicionais se a velocidade de upload for < 90%"
	, "Opções de Limites Globais"
	, "Aplicar limite para transporte excedente"
	, "Aplicar limite para conexões uTP"
	, "Recursos Básicos do BitTorrent"
	, "Habilitar Rede DHT"
	, "Obter do rastr. qualidade do torrent"
	, "Ativar DHT para novos torrents"
	, "Habilitar Troca de Peers"
	, "Habilitar Descoberta Local de Peers"
	, "Limitar banda de peer local"
	, "IP/Hostname a relatar p/ rastreador:"
	, "Encriptação de Protocolo"
	, "Saída:"
	, "Permitir conexões não criptografadas"
	, "Habilitar controle de banda [uTP]"
	, "Habilitar suporte a rastreador UDP"
	, "Habilitar Cap de Transferência"
	, "Configurações Cap"
	, "Tipo de Limite:"
	, "Banda Cap:"
	, "Período (dias):"
	, "Histórico de uso pelo período selecionado:"
	, "Enviado:"
	, "Baixado:"
	, "Enviado + Baixado"
	, "Período:"
	, "Últimos %d dias"
	, "Limpar Histórico"
	, "Configurações da Fila"
	, "Número máximo de torrents ativos (upload ou download):"
	, "Número máximo de downloads ativos:"
	, "Enviar Enquanto [Valores padrão]"
	, "Ratio mínimo (%):"
	, "Tempo mínimo de envio (minutos):"
	, "Tarefas de upload têm maior prioridade do que as de download"
	, "Quando o Torrent alcançar seu objetivo de envio"
	, "Limitar taxa de upload para: [0: parar]"
	, "Ativar Agendador"
	, "Tabela do Agendador"
	, "Configurações do Agendador"
	, "Limitar taxa de upload (kB/s):"
	, "Limitar taxa de download (kB/s):"
	, "Desativar DHT ao desligar"
	, "Habilitar Web UI"
	, "Autenticação"
	, "Usuário:"
	, "Senha:"
	, "Habilitar conta Visitante com o nome:"
	, "Conectividade"
	, "Porta alternativa de escuta (padrão é porta de conexão):"
,"Permite acesso apenas a partir desses IPs (separe as entradas com uma vírgula)"
	, "Opções Avançadas [CUIDADO: Não modifique!]"
	, "Valor:"
	, "Verdadeiro"
	, "Falso"
	, "Ajustar"
	, "Lista de Velocidades [Separar valores por vírgula]"
	, "Ignorar lista de velocidade automática"
	, "Veloc. de Upload:"
	, "Veloc. de Download:"
	, "Categorias Fixas [Separe múltiplas entradas com \"|\"]"
	, "Mecanismos de Pesquisa [Formato: nome|URL]"
	, "Configurações Básicas de Cache"
	, "O cache em disco é usado para manter os dados mais acessados na memória, reduzindo o uso do disco rígido. O µTorrent gerencia o cache automaticamente, mas você pode mudar seu comportamento modificando estas configurações."
	, "Definir tamanho do cache manualmente (MB):"
	, "Reduzir uso de memória quando o cache não for usado"
	, "Configurações Avançadas de Cache"
	, "Habilitar cache de escrita"
	, "Gravar cache de blocos não modificados a cada 2 minutos"
	, "Gravar cache de partes finalizadas imediatamente"
	, "Habilitar cache de leitura"
	, "Desligar leitura se a velocidade de upload for baixa"
	, "Remover blocos antigos do cache"
	, "Aumentar automat. tam. do cache a cada cache thrashing"
	, "Desabilitar cache de escrita"
	, "Desabilitar cache de leitura"
	, "Executar Programa"
	, "Executar este programa quando o torrent finalizar:"
	, "Executar este programa quando o torrent mudar de status:"
	, "Você pode usar estes comandos:\r\n%F - Nome do arquivo baixado (para torrents com um único arquivo)\r\n%D - Diretório onde os arquivo são salvos\r\n%N - Título do torrent\r\n%S - Status do torrent\r\n%L - Categoria\r\n%T - Rastreador\r\n%M - Mensagem de status (mesma da coluna status)\r\n%I - Info-hash em hex\r\n\r\nstatus é uma combinação de: iniciado =1, verificando = 2, inicio-depois-de-verificação = 4,\r\nverificado = 8, erro = 16, pausado = 32, auto = 64, carregado = 128"
	, "Propriedade do Torrent"
	, "Rastreadores (separar com linhas em branco)"
	, "Configurações do Controle Banda"
	, "Maximum upload rate (kB/s): [0: default]"
	, "Tava máxima de download (kB/s): [0: padrão]"
	, "Número de slots para upload: [0: padrão]"
	, "Enviar Enquanto"
	, "Não utilizar opções padrão"
	, "Ratio mínimo (%):"
	, "Tempo mínimo de envio (minutos):"
	, "Outras Configurações"
	, "Envio inicial"
	, "Ativar DHT"
	, "Troca de Peers"
	, "Feed"
	, "URL do Feed:"
	, "Descrição Personalizada:"
	, "Assinatura"
	, "Não baixar automaticamente todos itens"
	, "Baixar automaticamente todos itens publicados no feed"
	, "Usar filtro inteligente de epsódio"
	, "Feeds||Favoritos||Histórico||"
	, "All Feeds"
	, "Configurações de Filtro"
	, "Nome:"
	, "Filtro:"
	, "Não:"
	, "Salvar em:"
	, "Feed:"
	, "Qualidade:"
	, "Número do Episódio: [ex. 1x12-14]"
	, "Filtrar por nome original ao invés do nome decodificado"
	, "Não iniciar downloads automaticamente"
	, "Filtro ep. inteligente"
	, "Dar ao download prioridade máxima"
	, "Intervalo mínimo:"
	, "Categ. para novos torrents:"
	, "Adicionar Feed RSS..."
	, "Editar Feed"
	, "Desabilitar Feed"
	, "Habilitar Feed"
	, "Atualizar Feed"
	, "Excluir Feed"
	, "Download"
	, "Abrir URL no Navegador"
	, "Adicionar a Favoritos"
	, "Adicionar"
	, "Exluir"
	, "TODOS"
	, "(Todos)"
	, "(sempre)||(uma vez)||12 horas||1 dia||2 dias||3 dias||4 dias||1 semana||2 semenas||3 semanas||1 mês||"
	, "Adicionar Feed RSS"
	, "Editar Feed RSS"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Deseja realmente excluir o Alimentador RSS \"%s\"?"
	, "Nome Completo"
	, "Nome"
	, "Episódio"
	, "Formato"
	, "Codec"
	, "Data"
	, "Feed"
	, "URL Fonte"
	, "IP"
	, "Porta"
	, "Cliente"
	, "Flags"
	, "%"
	, "Relevância"
	, "Veloc. Down."
	, "Veloc. Up"
	, "Requisições"
	, "Esperado"
	, "Enviado"
	, "Baixado"
	, "Hasherr"
	, "Dl. Peer"
	, "Up Máx."
	, "Down Máx."
	, "Na Fila"
	, "Inativo"
	, "Concluído"
	, "Primeira Parte"
	, "Nome"
	, "N. Partes"
	, "%"
	, "Prioridade"
	, "Tamanho"
	, "ignorar"
	, "baixa"
	, "normal"
	, "alta"
	, "Baixado:"
	, "Enviado:"
	, "Seeds:"
	, "Restando:"
	, "Vel. de Download:"
	, "Vel. de Upload:"
	, "Peers:"
	, "Ratio:"
	, "Salvar Como:"
	, "Hash:"
	, "Geral"
	, "Transferência"
	, "%d de %d conectados (%d na multidão)"
	, "D:%s U:%s - %s"
	, "Copiar"
	, "Restaurar"
	, "Ilimitado"
	, "Resolver IPs"
	, "Get File(s)"
	, "Não baixar"
	, "Prioridade Alta"
	, "Prioride Baixa"
	, "Prioridade Normal"
	, "Copiar Magnet URI"
	, "Excluir Dados"
	, "Excluir .torrent"
	, "Excluir .torrent + Dados"
	, "Forçar Re-checagem"
	, "Forçar Ínicio"
	, "Categoria"
	, "Pausar"
	, "Propriedades"
	, "Descer na Fila"
	, "Subir na Fila"
	, "Remover"
	, "Remover e"
	, "Iniciar"
	, "Parar"
	, "Ativo"
	, "Todos"
	, "Concluído"
	, "Baixando"
	, "Invativo"
	, "Sem categoria"
	, "||Disp.||Disponibilidade"
	, "Adicionado"
	, "Completed On"
	, "Concluído"
	, "Baixado"
	, "Veloc. Down"
	, "TED"
	, "Categoria"
	, "Nome"
	, "N."
	, "Peers"
	, "Restando"
	, "Seeds"
	, "Seeds/Peers"
	, "Ratio"
	, "Tamanho"
	, "URL Fonte"
	, "Status"
	, "Enviado"
	, "Veloc. Up"
	, "Tem certeza que deseja excluir os %d torrents selecionados e todos os seus dados?"
	, "Tem certeza que deseja excluir o torrent selecionado e todos os seus dados?"
	, "Tem certeza que deseja excluir os %d torrents selecionados?"
	, "Tem certeza que deseja excluir o torrent selecionado?"
	, "Confirma exclusão do filtro Rss \"%s\"?"
	, "Verificado %:.1d%%"
	, "Baixando"
	, "Erro: %s"
	, "Finalizado"
	, "Pausado"
	, "Na Fila"
	, "Envios na Fila"
	, "Enviando"
	, "Parado"
	, "Informe a categoria"
	, "Informe a nova categoria para os torrents selecionados:"
	, "Nova Categoria..."
	, "Remover categoria"
	, "Geral||Rastreadores||Peers||Partes||Arquivos||Velocidade||Registros||"
	, "Adicionar Torrent"
	, "Adicionar torrent da URL"
	, "Pausar"
	, "Preferências"
	, "Descer na Fila"
	, "Subir na File"
	, "Excluir"
	, "Leitor de RSS"
	, "Iniciar"
	, "Parar"
	, "Arquivo"
	, "Adicionar Torrent..."
	, "Adicionar Torrent da URL"
	, "Opções"
	, "Preferências"
	, "Exibir Lista de Categorias"
	, "Exibir Informações Detalhadas"
	, "Exibir Barra de Status"
	, "Exibir Barra de Ferramentas"
	, "Ícones nas Abas"
	, "Ajuda"
	, "Site do µTorrent"
	, "Fóruns µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pausar todos os torrents"
	, "Reiniciar todos os torrents"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avançado"
	, "Controle de Banda"
	, "Conexão"
	, "Cache de disco"
	, "Diretórios"
	, "Geral"
	, "Agendador"
	, "Fila"
	, "Extras UI"
	, "Interface UI"
	, "BitTorrent"
	, "Web UI"
	, "Cap de Transferência"
	, "Executar Programa"
	, "Mostrar propriedades||Iniciar/Parar||Abrir pasta||Mostrar barra de download||"
	, "Desativado||Ativado||Forçado||"
	, "(nenhum)||Socks4||Socks5||HTTPS||HTTP||"
	, "Uploads||Downloads||Uploads + Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nome"
	, "Valor"
	, "Seg||Ter||Qua||Qui||Sex||Sab||Dom||"
	, "Segunda-feira||Terça-feira||Quarta-feira||Quinta-feira||Sexta-feira||Sábado||Domingo||"
	, "Total"
	, "Velocidade máxima - Usa limite de banda global normal"
	, "Limitada"
	, "Limitado - Usa opções agendadas de limite de banda"
	, "Somente envio"
	, "Somente envio - Somente dados de uplodas (incluindo incompletos)"
	, "Desligar"
	, "Desligar - Para todos torrents que não são forçados"
	, "<= %d horas"
	, "(Ignorar)"
	, "<= %d minutos"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%ds %dd"
	, "%da %ds",
"More Action",
"Torrents",
		"Feeds",
		"Aplicativo",
		"país",
		'tempo ETA', // i.e. how much time remaining
		"de", // i.e. 3 of 4 peers
		"/s", // "per second""
		"Cole uma URL de torrent ou feed",
		"Página Inicial",
		"Logoff",
		"Propagação",
		"Todos os Feeds",
		"taxa de bits",
		"resolução",
		"comprimento",
		"transmissível",
		"tipo", // i.e. file extension
		"remoto", // i.e. uTorrent remote
		"sobre",
		"sessões",
		"compartilhar",
		"Compartilhar este torrent",
		"Compartilhar link",
		"adicionar",
		"Logoff",
		"fazer logon",
		"acesso de qualquer lugar",
		"permaneça conectado",
		"download",
		"Atualmente seu cliente não está disponível. Verifique se está conectado à internet.",
		"Impossível a comunicação com o seu cliente &micro;Torrent. Essa mensagem desaparecerá automaticamente quando a conexão for restabelecida.",
		"Abra o arquivo",
		"Faça download para o seu computador",
		"Abra com o VLC Media Player",
		"Ações",
		"temporada" // i.e. of a TV show
];
