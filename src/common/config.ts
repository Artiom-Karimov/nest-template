import convict from 'convict';

const values = convict({
  port: {
    default: 3024,
    env: 'PORT',
    doc: 'REST API port',
    format: Number,
  },
});

values.validate({ allowed: 'strict' });

export const config = values.getProperties();
