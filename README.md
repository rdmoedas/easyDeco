# Sobre o formulário

Formulário html que envia o método "post".

Os seguintes campos são passados:

Nome completo (name="fullName"), 
Email (name="email"),
Senha (name="password"),
Verificação repetindo a senha (name="passwordRepeat").

# Validação dos campos

## HTML

Em todos os campos de input foi utilizado o atributo 'required' o que exige que o campo seja preenchido.
No campo nome foi utilizada a pattern "[A-zÀ-ž ]{3,}", o que limita que nome seja preenchido apenas com Letras (maiusculas ou minusculas), letras com acentuação e espaço, e exige que o nome tenha no mínimo 3 caracteres.

Campo email, foi utilizado o atributo type="email" o que adiciona a verificação para que a string tenha o formato de um email além de dar feedback para o usuário quando há erro (nos navegadores mais modernos).

Campo senha, foi utilizado o pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,14}$" e minlength="8" maxlength="14", embora os valores de length e o trecho {8,14} fiquem redundante o maxlength impede que o usuário continua digitando valores após chegar em 14 dígitos. Sobre a patter ela assegura as exigências da regra de criação de email: Mínimo de 8 caracteres Máximo de 14 caracteres Obrigatório pelo menos um caractere maiúsculo, um minúsculo, um número e um caracter especial

A regra: "Não é permitido repetir a mesma sequência de caracteres" vai ser verificada pelo código js.

## JS

### Verificação da senha:
1. Mínimo de 8 caracteres
2. Máximo de 14 caracteres
3. Obrigatório pelo menos um caractere maiúsculo, um minúsculo, um número e um caracter especial

As três regras são verificadas utilizando a mesma expressão regex utilizada no atributo pattern do código html. A vantagem de repetir é permitir utilizar a verificação para dar uma resposta dinâmica ao usuário.
Espressão Regex /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,14}$/g

4. "Não é permitido repetir a mesma sequência de caracteres 
A expressão Regex /([\w!@#$%^&*_=+-]{2,}).*?\1/g filtra a repetição de sequências de 2 ou mais caracteres. 
Salvei essa expressão no site regex101, que separa a expressão nos seus componente e da uma  explicação mais detalhada, link: https://regex101.com/r/dHgCsl/1

 - Verificação de repetição da senha, como a senha tem diferentes requisitos foi incluído essa verificação para garantir que o usuário tenha acesso a senha. Pode ser uma boa prática adicionar um ícone para permitir que o usuário veja a senha digitada, principalmente para os usuários mobile.

# Mensagem de sucesso

A mensagem de sucesso passada é um simples alert com a string 'Conta cadastrada com sucesso'. O ideal é substituir a mensagem de sucesso atual após a ligação com o backend e exibir uma mensagem de sucesso apenas caso a criação da conta tenha tido sucesso no backend.

Também foram implementadas mensagens de erro, além das mensagens padrão do formulário HTML caso a senha repetida esteja errada um aviso é exibido embaixo do campo 'Repetir a senha:'

# Identidade Visual

Sobre o UI/UX foi escolhida uma palheta de cor na ferramenta Collors.co

Ex da palheta https://www.instagram.com/p/B8ghHp0CL7f/

Cores da palheta: #424242 #747C81 #C1D1E1 #E79F39 #601D46

Criei um design básico utilizando o aplicativo figma. Busquei um design simples e comecei pela ideia de mobile first, desenhando e criando o formulário com base na tela mobile já que normalmente concentram a maior parte dos usuários.

Link do figma https://www.figma.com/file/BjYcB7sKrT7zvj9OIDSi0T/Desing-EasyDeco?node-id=0%3A1

# Usabilidade

Em todos os campos foi utilizado texto com placeholder e label para facilitar a compreensão do preenchimento do formulário.

Pensando na experiência do usuário foi escolhido a validação de campos utilizando o html5 pois o navegador exibe uma mensagem de feedback caso haja algum erro no preenchimento dos campos.

Também foi utilizado o atributo title, que é exibido junto com a mensagem de erro de preenchimento padrão do navegador.

Para o campo senha que é mais complexo devido às exigências de segurança foi criado uma lista com as instruções, ela é exibida assim que o usuário clica para digitar a senha.
