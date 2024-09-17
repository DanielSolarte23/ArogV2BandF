// Exporta una constante llamada TOKEN_SECRET que contiene una clave secreta.
// Esta clave se utiliza para firmar y verificar tokens (como JWT), asegurando que los tokens no puedan ser manipulados.
// Es importante mantener esta clave segura y no exponerla públicamente, ya que comprometerla podría permitir que un atacante genere tokens válidos.
// En una aplicación real, esta clave se almacenaría en una variable de entorno para mayor seguridad.

export const TOKEN_SECRET = 'some secret key'