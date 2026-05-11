/**
 * UI dictionaries.
 * Add new locales by adding a key to `messages` and to `SITE.locales` in
 * src/config.ts. All keys must exist for every locale (TypeScript enforces it).
 */

import type { Locale } from '../config';

export const messages = {
  en: {
    'site.skipToContent': 'Skip to content',
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.tags': 'Tags',
    'nav.categories': 'Categories',
    'nav.archives': 'Archives',
    'nav.about': 'About',
    'nav.search': 'Search',
    'nav.toggleMenu': 'Toggle menu',

    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    'lang.switcher': 'Language',
    'lang.en': 'English',
    'lang.pt-br': 'Portuguese (BR)',

    'post.publishedOn': 'Published on',
    'post.updatedOn': 'Updated on',
    'post.readingTime': 'min read',
    'post.toc': 'Table of contents',
    'post.tags': 'Tags',
    'post.categories': 'Categories',
    'post.previous': 'Previous',
    'post.next': 'Next',
    'post.comments': 'Comments',
    'post.commentsDisabled': 'Comments are disabled for this post.',
    'post.commentsSetupTitle': 'Comments need configuration',
    'post.commentsSetupBody':
      'Giscus is enabled but not yet configured. Add the repository details below to start collecting comments.',
    'post.commentsSetupStep1':
      'Visit `giscus.app` and select your public GitHub repository (Discussions must be enabled).',
    'post.commentsSetupStep2':
      'Copy the generated `data-repo-id`, `data-category` and `data-category-id` values.',
    'post.commentsSetupStep3':
      'Set the `PUBLIC_GISCUS_ENABLED`, `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY` and `PUBLIC_GISCUS_CATEGORY_ID` env vars in your `.env` file.',
    'post.commentsSetupStep4':
      'Rebuild the site — this notice will be replaced by the live comments thread.',
    'post.commentsSetupDocs': 'Open giscus.app',
    'post.share': 'Share',
    'post.copyLink': 'Copy link',
    'post.copied': 'Copied!',
    'post.author': 'Author',

    'list.allPosts': 'All posts',
    'list.empty': 'No posts found.',
    'list.tagPosts': 'Posts tagged',
    'list.categoryPosts': 'Posts in',
    'list.totalPosts': 'posts',
    'list.totalPostsOne': 'post',

    'pagination.previous': 'Previous page',
    'pagination.next': 'Next page',
    'pagination.page': 'Page',
    'pagination.of': 'of',

    'archives.title': 'Archives',
    'archives.empty': 'No posts yet.',

    'tags.title': 'Tags',
    'tags.empty': 'No tags yet.',

    'categories.title': 'Categories',
    'categories.empty': 'No categories yet.',

    'search.title': 'Search',
    'search.placeholder': 'Search the site',
    'search.openLabel': 'Open search',
    'search.closeLabel': 'Close search',
    'search.empty': 'No results.',
    'search.loading': 'Loading search\u2026',
    'search.typeToStart': 'Type to search\u2026',
    'search.hintShortcut': 'Press / anywhere to open search',
    'search.searching': 'Searching\u2026',
    'search.noResultsFor': 'No results for',
    'search.resultsCount': 'results',
    'search.resultsCountOne': 'result',
    'search.hintNavigate': 'to navigate',
    'search.hintSelect': 'to open',
    'search.clearLabel': 'Clear',

    'code.copy': 'Copy',
    'code.copied': 'Copied',

    '404.title': 'Page not found',
    '404.description': 'The page you are looking for has flown away.',
    '404.cta': 'Back to home',

    'footer.poweredBy': 'Powered by',
    'footer.theme': 'Theme',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'All rights reserved.',
  },

  'pt-br': {
    'site.skipToContent': 'Ir para o conteúdo',
    'nav.home': 'Início',
    'nav.posts': 'Artigos',
    'nav.tags': 'Tags',
    'nav.categories': 'Categorias',
    'nav.archives': 'Arquivo',
    'nav.about': 'Sobre',
    'nav.search': 'Buscar',
    'nav.toggleMenu': 'Abrir menu',

    'theme.toggle': 'Alternar tema',
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.system': 'Sistema',

    'lang.switcher': 'Idioma',
    'lang.en': 'Inglês',
    'lang.pt-br': 'Português (BR)',

    'post.publishedOn': 'Publicado em',
    'post.updatedOn': 'Atualizado em',
    'post.readingTime': 'min de leitura',
    'post.toc': 'Índice',
    'post.tags': 'Tags',
    'post.categories': 'Categorias',
    'post.previous': 'Anterior',
    'post.next': 'Próximo',
    'post.comments': 'Comentários',
    'post.commentsDisabled': 'Os comentários estão desativados para este artigo.',
    'post.commentsSetupTitle': 'Comentários precisam de configuração',
    'post.commentsSetupBody':
      'O Giscus está ativado, mas ainda não foi configurado. Adicione as informações do repositório abaixo para começar a receber comentários.',
    'post.commentsSetupStep1':
      'Acesse `giscus.app` e selecione seu repositório público do GitHub (as Discussões devem estar habilitadas).',
    'post.commentsSetupStep2':
      'Copie os valores gerados de `data-repo-id`, `data-category` e `data-category-id`.',
    'post.commentsSetupStep3':
      'Defina as variáveis de ambiente `PUBLIC_GISCUS_ENABLED`, `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY` e `PUBLIC_GISCUS_CATEGORY_ID` no seu arquivo `.env`.',
    'post.commentsSetupStep4':
      'Reconstrua o site — este aviso será substituído pelo painel de comentários ao vivo.',
    'post.commentsSetupDocs': 'Abrir giscus.app',
    'post.share': 'Compartilhar',
    'post.copyLink': 'Copiar link',
    'post.copied': 'Copiado!',
    'post.author': 'Autor',

    'list.allPosts': 'Todos os artigos',
    'list.empty': 'Nenhum artigo encontrado.',
    'list.tagPosts': 'Artigos com a tag',
    'list.categoryPosts': 'Artigos em',
    'list.totalPosts': 'artigos',
    'list.totalPostsOne': 'artigo',

    'pagination.previous': 'Página anterior',
    'pagination.next': 'Próxima página',
    'pagination.page': 'Página',
    'pagination.of': 'de',

    'archives.title': 'Arquivo',
    'archives.empty': 'Nenhum artigo ainda.',

    'tags.title': 'Tags',
    'tags.empty': 'Nenhuma tag ainda.',

    'categories.title': 'Categorias',
    'categories.empty': 'Nenhuma categoria ainda.',

    'search.title': 'Busca',
    'search.placeholder': 'Buscar no site',
    'search.openLabel': 'Abrir busca',
    'search.closeLabel': 'Fechar busca',
    'search.empty': 'Nenhum resultado.',
    'search.loading': 'Carregando busca\u2026',
    'search.typeToStart': 'Digite para buscar\u2026',
    'search.hintShortcut': 'Pressione / em qualquer lugar para abrir a busca',
    'search.searching': 'Buscando\u2026',
    'search.noResultsFor': 'Nenhum resultado para',
    'search.resultsCount': 'resultados',
    'search.resultsCountOne': 'resultado',
    'search.hintNavigate': 'para navegar',
    'search.hintSelect': 'para abrir',
    'search.clearLabel': 'Limpar',

    'code.copy': 'Copiar',
    'code.copied': 'Copiado',

    '404.title': 'Página não encontrada',
    '404.description': 'A página que você está procurando voou para longe.',
    '404.cta': 'Voltar ao início',

    'footer.poweredBy': 'Desenvolvido com',
    'footer.theme': 'Tema',
    'footer.privacy': 'Política de Privacidade',
    'footer.copyright': 'Todos os direitos reservados.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof messages)['en'];