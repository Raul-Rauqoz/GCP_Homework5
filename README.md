# GCP_Homework5

# Cloud SQL

## Crear Instancia
    gcloud sql instances create rauqozsqli \
    --database-version=MYSQL_5_7 --cpu=2 --memory=4GB \
    --region=us-central1 --root-password=dummy123i

## Crear Usuario
    gcloud sql users create rauqozuser --host=% \
    --instance=rauqozsqli --password=dummy123u

## Informacion de Instancia
    gcloud sql instances describe rauqozsql

# Cloud Function
## Comando para despligue de la funcion

create folder 'function'
Cd function
npm init -y
npm i @google-cloud/functions-framework mysql
create index.js and code
open terminal in folder 'function'

    gcloud functions deploy rauqozfunc --runtime nodejs16 --trigger-http --allow-unauthenticated