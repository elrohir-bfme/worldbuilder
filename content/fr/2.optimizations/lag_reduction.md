---
title: Comment réduire les risques de bug ?
description: 'Voici de nombreuses façons de réduire le lag pour vos maps.'
category: 'Optimisations'
---

# 1: Placement des objets - 

Dans le coin inférieur gauche de votre éditeur se trouve un compteur qui indique le nombre d'objets que vous avez placés sur votre carte. 

Cela ne concerne que les unités et les objets sur la carte, mais n'inclut pas les lieux (points de passage, zones, plans d'eau). 

Voici la quantité recommandée d'objets que vous pouvez placer sur la carte: 

- 500 ou moins - Parfait ! 
- 500-750 - C'est bien. 
- 750-1000 - ça passe. 
- 1000-1500 - Le jeu commencera à ralentir légèrement lorsque vous aurez beaucoup d'unités. 
- 1500-2000 - Si votre carte est supérieure à 300 x 300, attendez-vous à un bon décalage lorsque le nombre d'unité augmente. 
- 2000 ou plus - Commencez à rechercher des objets à supprimer. Il n'y a aucune raison d'avoir autant d'objets sur la carte et vous essayez d'être fantaisiste.

# 2: Taille et échelle de la carte 

Plus c'est grand, mieux c'est, mais il y aura toujours plus de décalage avec le plus d'objets et la quantité d'unités que vous mettez sur la carte. Pour les cartes de forteresse d'une taille supérieure à 300 x 300, il serait judicieux d'agrandir vos objets pour non seulement réduire le décalage en réduisant le nombre d'objets, mais aussi en donnant à votre carte un aspect aussi épique que possible. Si vous ne savez pas comment mettre à l'échelle un objet, vous pouvez simplement cliquer sur un objet dans World Builder et regarder les propriétés de cette unité, la taille de l'échelle est là. Si vous ne trouvez pas cela, vous êtes un noob et devriez revenir à la cartographie 101 ou à l'aveugle. 

# 3: ANGLE DE LA CAMÉRA 

C'est la clé pour avoir une carte décalée ou non. La valeur par défaut EA pour l'angle de la caméra est 37,5, ce qui fait ce qu'elle implique en plaçant la caméra sur un angle de 37,5 degrés (vers le bas). Ceci est retardé, il n'y a aucune raison d'avoir votre angle de caméra sur le paramètre par défaut d'EA. Changez-le quelque chose entre 45 et 70. Dans cette plage, votre PC aura une vue plus descendante qui n'est pas perceptible pour les joueurs. La raison pour laquelle cela réduit le décalage est que si vous avez un ange de caméra de 37,5 ou moins, votre PC doit maintenant rendre plus d'objets au loin et également rendre plus de carte tout en jouant au jeu. Si vous essayez de créer une sorte de carte RPG avec un angle plus 3D, il est possible de le faire, mais le jeu devient plus instable avec des cartes plus grandes et plus d'objets. La prochaine chose avec l'appareil photo est la hauteur à laquelle votre appareil photo est autorisé à aller. Vous ne devriez pas faire en sorte que la hauteur de la caméra ne dépasse pas 500-600 car cela rendrait une trop grande partie de la carte provoquant un ralentissement. EA l'a fixé à environ 300. 

# 4: Placement des unités, batailles épiques 

En réalité, je dirais que vous pouvez avoir environ 50 unités de taille de bataillon sur une seule carte. Rien de plus que cela créerait des pics de retard. Un autre indicateur à parcourir est les points de commande. Additionnez tous les joueurs sur les points de commande de la carte et si c'est plus de 8000, disons, vous avez accès à de nombreuses unités. Si vous voulez vraiment faire une bataille épique, vous devriez envisager de placer des points de cheminement sur la carte où vous voulez que les unités apparaissent et de ne les faire apparaître qu'après la mort d'une autre unité déjà en jeu. 

# 5: Wind Sway 

Vous connaissez chaque arbre que vous avez et le buisson se balance d'un côté à l'autre au cours d'une partie. Si vous cherchez simplement des moyens de réduire le décalage, je vous suggère d'aller dans l'outil de script et de créer un nouveau script et de trouver la fonction windway dans la section inutilisée sous environnement. Si vous mettez tout à zéro, cela supprimera tout le balancement des arbustes