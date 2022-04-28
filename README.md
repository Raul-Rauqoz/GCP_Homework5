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

## Function
mkdir function
cd function
touch index.js
npm init
npm install escape-html
npm install @google-cloud/functions-framework
npm install mysql
npm install dotenv

## Comando para despligue de la funcion
gcloud functions deploy userHttp --runtime nodejs16 --trigger-http --allow-unauthenticated