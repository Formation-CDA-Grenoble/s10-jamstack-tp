# Travaux pratiques JAMStack

Notre client est une chaîne de restaurants. Ils sont très contents du site vitrine qu'on leur a fait, mais ils voudraient maintenant afficher sur leur site une carte interactive avec des épingles pour identifier chaque restaurant. Il faudrait aussi que lorsqu'on clique sur une épingle, un panneau d'informations apparaisse, avec le nom, l'adresse, le numéro de téléphone, ainsi qu'une petite description de l'établissement (et pourquoi pas quelque photos tant qu'on y est).

Comme le site actuel est un site statique hébergé sur Netlify, sans partie back-end, nous avons pensé qu'il serait judicieux d'implémenter cette fonctionnalité en JAMStack, avec le gestionnaire de contenu DatoCMS, et une application progressive en React.

## 1. Mise en place du projet DatoCMS

Après vous être authentifié dans DatoCMS, faites un nouveau projet, dans lequel vous créerez un modèle **Restaurant**, avec les champs nécessaires à la réalisation de la fonctionnalité décrite ci-dessus. Ajoutez entre 5 et 10 instances de **Restaurant** en vous inspirant de restaurants réels ou fictifs.

## 2. Configuration de l'application React

Trouvez la clé d'API (en lecture seule) de votre projet et enregistrez-la dans un fichier **.env** au format suivant:

`REACT_APP_DATOCMS_API_TOKEN=<votre clé d'API>`

Après vous être authentifié dans Netlify, créez un nouveau site à partir du présent dépôt, et dans la configuration du projet, entrez une nouvelle variable d'environnement, avec le même nom, et la clé d'API comme valeur.

La clé d'API doit s'afficher correctement en développement et en production.

## 3. Requête GraphQL permettant de récupérer tous les restaurants

Dans DatoCMS, à l'aide de l'explorateur d'API, écrivez la requête GraphQL qui vous permet de récupérer tous les restaurants et leurs données. Testez cette requête à l'aide de Postman:

- endpoint: `https://graphql.datocms.com/`
- méthode: **POST**
- body: `{ query: <Votre requête GraphQL> }`
- headers: `{ Authorization: "Bearer <votre clé d'API>" }`

## 4. Afficher la liste des restaurants dans l'application React

Codez un composant qui récupère la liste de tous les restaurants à l'aide d'Axios (déjà inclus dans ce dépôt), et de la requête écrite à l'étape précédente.

## 5. Afficher les restaurants sur une carte

Le composant codé à l'étape précédente doit afficher une carte interactive sur laquelle apparaissent tous les restaurants, au lieu d'une simple liste. Vous pouvez pour ce faire utiliser [Leaflet](https://react-leaflet.js.org/en/) (déjà inclus dans ce dépôt), en vous inspirant de ce [CodePen](https://codepen.io/PaulLeCam/pen/gzVmGw) ou des [exemples fournis dans la documentation](https://react-leaflet.js.org/docs/en/examples).

## BONUS

Ajoutez un routeur dans l'application, avec une page pour chaque restaurant, qui permet de présenter l'établissement. Chaque panneau ouvert au clic sur une épingle dans la carte doit contenir un lien qui amène à la page du restaurant correspondant.
