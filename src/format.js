import { warn } from './utils'

const difference = (array1, array2) => {
  return array1.filter(n => array2.indexOf(n) < 0)
}

/**
 * Warns when the same language is added to the state
 * @param  {Array<Object>} languages
 * @param  {Object} language
 * @return {Boolean}
 */
export const defineUniqueLanguage = (languages, language) => {
  const exists = languages.find(n => n.code === language.code)

  if (!exists) {
    return true
  }

  warn(`"${language.code}" already exists in the list of languages`)
  return false
}

/**
 * Warns when required fields are not created languages object.
 * @param  {Object} language
 * @return {Boolean}
 */
export const defineLanguage = (language) => {
  const mandatory = ['code', 'translateTo', 'urlPrefix']
  const languageKeys = Object.keys(language)
  const differences = difference(mandatory, languageKeys)

  if (differences.length) {
    warn(`Invalid language definition. Property ${differences.join(', ')} missing.`)
    return false
  }

  return true
}

/**
 * Warns if the default language code matches at least one of the provided languages,
 * otherwise the application could break.
 * @param  {Array} languages
 * @param  {String} code
 * @return {Boolean}
 */
export const defineLanguages = (languages, code) => {
  const language = languages.find(n => n.code === code)

  if (!language) {
    warn('The default code must matches at least one language in the provided list')
    return false
  }

  return true
}

/**
 * Checks invalid and deprecated keys
 * @param  {Array} allowedKeys
 * @param  {Array} paramsKeys
 * @param  {String} context
 * @param  {Array}  [deprecatedKeys=[]]
 * @return {Boolean}
 */
export const defineKeys = (newKeys, allowedKeys, context, deprecatedKeys = []) => {
  const invalidKeyes = difference(newKeys, allowedKeys)

  if (invalidKeyes.length) {
    invalidKeyes.forEach(key => {
      const deprecated = deprecatedKeys.find(n => n.old === key)

      if (deprecated) {
        warn(`"${key}" is a deprecated parameter. Please use "${deprecated.new}"`)
        return
      }

      warn(`"${key}" is not a valid parameter to pass to ${context}`)
    })

    return false
  }

  return true
}
