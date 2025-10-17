# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/686f7340-ad6a-418a-945c-59666b82c486

## Updating prices and team information

The site reads pricing and team data directly from the CSV files in `public/`. To update the live site:

1. In GitHub, edit `public/lista_preturi_servicii.csv` (for prices) or `public/personal_list.csv` (for team members).
2. Adjust the desired rows (for example, change the `Pret` value for “ANESTEZIE” from `50.00` to `75.00` or add a new team row).
3. Scroll down and commit the change – Netlify will rebuild automatically, and the `/lista-preturi` and team sections will refresh with the new data.

### CSV format tips

- Keep the column headers unchanged:  
  `Nr.crt.,Denumire manopera,Pret,Categorie` for prices and `Nr.crt,Nr.poza,Nume si prenume,Functia` for team.
- Prices accept values like `500`, `500.00`, `450 EURO` or ranges such as `2000.00-2500.00`. The scripts convert them to the right format automatically.
- Categories must stay within the existing set (Consultații, Profilaxie și igienizare, Ortodonție și ortopedie dento-facială, Protetică, Implantologie, Chirurgie orală, Parodontologie, Endodonție, Odontoterapie restauratoare, Estetică dentară). If a new category is needed, update the sync script accordingly.
- For team photos, fill `Nr.poza` with the numeric suffix of the photo file (e.g., `75` becomes `/poze_cabinet/Foto-75.jpg`). Leave the field blank to omit the photo.

### Local development

- Run `npm run sync:data` to regenerate the TypeScript data modules from the CSV files.
- `npm run build` automatically executes the sync step via the `prebuild` hook, so local and Netlify builds always stay in sync.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/686f7340-ad6a-418a-945c-59666b82c486) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/686f7340-ad6a-418a-945c-59666b82c486) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
