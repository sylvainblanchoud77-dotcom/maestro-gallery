// Script Maestro pour synchroniser le bucket R2 avec Payload
import { getPayload } from 'payload'
import config from './payload.config'

async function syncR2() {
  const payload = await getPayload({ config })
  
  // Ici, le code va lister vos fichiers dans "Site internet sb NAPLES/"
  // et les ajouter un par un à votre collection Media
  console.log('Début de l’inventaire de la collection Naples...')
  
  // Simulation de l'ajout (Je préparerai la version finale une fois l'accès API confirmé)
  // Cela créera les entrées automatiquement pour vous.
}

syncR2()
