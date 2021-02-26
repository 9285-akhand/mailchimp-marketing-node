/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.34
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * Templates service.
 * @module api/TemplatesApi
 */

/**
 * Constructs a new TemplatesApi. 
 * @alias module:api/TemplatesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete template
   * Delete a specific template.
   * @param {String} templateId The unique id for the template.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deleteTemplateWithHttpInfo = function(templateId) {
    var postBody = null;

    // verify the required parameter 'templateId' is set
    if (templateId === undefined || templateId === null) {
      throw new Error("Missing the required parameter 'templateId' when calling ");
    }

    var pathParams = {
      'template_id': templateId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates/{template_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete template
   * Delete a specific template.
   * @param {String} templateId The unique id for the template.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deleteTemplate = function(templateId) {
    return this.deleteTemplateWithHttpInfo(templateId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List templates
   * Get a list of an account's available templates.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.createdBy The Mailchimp account user who created the template.
   * @param {String} opts.sinceDateCreated Restrict the response to templates created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.beforeDateCreated Restrict the response to templates created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.type Limit results based on template type.
   * @param {String} opts.category Limit results based on category.
   * @param {String} opts.folderId The unique folder id.
   * @param {module:model/String} opts.sortField Returns user templates sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Templates} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'created_by': opts['createdBy'],
      'since_date_created': opts['sinceDateCreated'],
      'before_date_created': opts['beforeDateCreated'],
      'type': opts['type'],
      'category': opts['category'],
      'folder_id': opts['folderId'],
      'sort_field': opts['sortField'],
      'sort_dir': opts['sortDir']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List templates
   * Get a list of an account's available templates.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @param {String} opts.createdBy The Mailchimp account user who created the template.
   * @param {String} opts.sinceDateCreated Restrict the response to templates created after the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.beforeDateCreated Restrict the response to templates created before the set date. We recommend [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time format: 2015-10-21T15:41:36+00:00.
   * @param {String} opts.type Limit results based on template type.
   * @param {String} opts.category Limit results based on category.
   * @param {String} opts.folderId The unique folder id.
   * @param {module:model/String} opts.sortField Returns user templates sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Templates}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get template info
   * Get information about a specific template.
   * @param {String} templateId The unique id for the template.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
   */
  this.getTemplateWithHttpInfo = function(templateId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'templateId' is set
    if (templateId === undefined || templateId === null) {
      throw new Error("Missing the required parameter 'templateId' when calling ");
    }

    var pathParams = {
      'template_id': templateId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates/{template_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get template info
   * Get information about a specific template.
   * @param {String} templateId The unique id for the template.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
   */
  this.getTemplate = function(templateId, opts) {
    return this.getTemplateWithHttpInfo(templateId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * View default content
   * Get the sections that you can edit in a template, including each section's default content.
   * @param {String} templateId The unique id for the template.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateDefaultContent} and HTTP response
   */
  this.getDefaultContentForTemplateWithHttpInfo = function(templateId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'templateId' is set
    if (templateId === undefined || templateId === null) {
      throw new Error("Missing the required parameter 'templateId' when calling ");
    }

    var pathParams = {
      'template_id': templateId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates/{template_id}/default-content', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * View default content
   * Get the sections that you can edit in a template, including each section's default content.
   * @param {String} templateId The unique id for the template.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateDefaultContent}
   */
  this.getDefaultContentForTemplate = function(templateId, opts) {
    return this.getDefaultContentForTemplateWithHttpInfo(templateId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update template
   * Update the name, HTML, or `folder_id` of an existing template.
   * @param {String} templateId The unique id for the template.
   * @param {module:model/TemplateInstance2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
   */
  this.updateTemplateWithHttpInfo = function(templateId, body) {
    var postBody = body;

    // verify the required parameter 'templateId' is set
    if (templateId === undefined || templateId === null) {
      throw new Error("Missing the required parameter 'templateId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'template_id': templateId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates/{template_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update template
   * Update the name, HTML, or `folder_id` of an existing template.
   * @param {String} templateId The unique id for the template.
   * @param {module:model/TemplateInstance2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
   */
  this.updateTemplate = function(templateId, body) {
    return this.updateTemplateWithHttpInfo(templateId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add template
   * Create a new template for the account. Only Classic templates are supported.
   * @param {module:model/TemplateInstance1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateInstance} and HTTP response
   */
  this.createWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/templates', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add template
   * Create a new template for the account. Only Classic templates are supported.
   * @param {module:model/TemplateInstance1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateInstance}
   */
  this.create = function(body) {
    return this.createWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
