# Germicore - Instruções de Deploy para Vercel (Arquivos Grandes)

Este guia foi atualizado para lidar com os modelos 3D do seu projeto. O arquivo `germicore_unit.glb` tem cerca de 83MB, o que é permitido pelo GitHub (limite de 100MB por arquivo), mas pode causar lentidão no upload.

## Como subir para o GitHub sem erros

1.  **Crie o Repositório:** No GitHub, crie um novo repositório vazio.
2.  **Upload via Navegador:**
    *   Se você for subir os arquivos arrastando para o navegador, faça isso em pequenos grupos se a sua internet oscilar.
    *   O arquivo `germicore_unit.glb` (83MB) vai demorar um pouco mais, espere a barra de progresso terminar totalmente antes de clicar em "Commit changes".

3.  **Dica Profissional (Git LFS):**
    Se o GitHub der erro dizendo que o arquivo é muito grande, você deve usar o **Git LFS** (Large File Storage).
    *   Instale o Git LFS em sua máquina.
    *   No terminal da pasta do projeto, digite:
        ```bash
        git lfs install
        git lfs track "*.glb"
        git add .gitattributes
        ```
    *   Depois disso, faça o commit e push normalmente.

## Configuração no Vercel

Ao importar o projeto no Vercel, use estas configurações exatas:

| Configuração      | Valor                 |
| :---------------- | :-------------------- |
| **Framework Preset** | `Vite`                |
| **Build Command**    | `pnpm build`          |
| **Output Directory** | `dist/public`         |
| **Install Command**  | `pnpm install`        |

**Nota sobre os Modelos 3D:**
O Vercel servirá os arquivos `.glb` automaticamente a partir da pasta `client/public`. Não é necessária nenhuma configuração extra para o 3D funcionar online.

## Link Permanente
Após o deploy, você terá um link como `https://germicore.vercel.app`. Este link nunca expira e é perfeito para o seu canal do YouTube.
