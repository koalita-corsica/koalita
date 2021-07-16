// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import author from './documents/author';
import category from './documents/category';
import siteSettings from './documents/siteSettings';
import clients from './documents/clients';
import partenaire from './documents/partenaire';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';
import travails from './documents/travails';
import prestations from './documents/prestations';
import logo from './objects/logo';
import formations from './objects/formations';
import siteweb from './objects/siteweb';
import suppCom from './objects/suppCom';
import etape from './objects/etape';
import supcomImage from './objects/suppComImg';
import formation from './objects/formation';
import team from './documents/team';
import goodies from './documents/goodies';
import blogpost from './documents/blogpost';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    category,
    author,
    travails,
    clients,
    prestations,
    partenaire,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    logo,
    formations,
    siteweb,
    suppCom,
    etape,
    supcomImage,
    formation,
    team,
    goodies,
    blogpost,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
