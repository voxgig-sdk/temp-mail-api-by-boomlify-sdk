<?php
declare(strict_types=1);

// TempMailApiByBoomlify SDK configuration

class TempMailApiByBoomlifyConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TempMailApiByBoomlify",
                "slug" => "temp-mail-api-by-boomlify",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://boomlify.com/api/v1",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "domain" => [],
                    "email" => [],
                    "inbox" => [],
                ],
            ],
            "entity" => [
        'domain' => [
          'fields' => [
            [
              'name' => 'domains',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'domain',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/domains',
                  'parts' => [
                    'domains',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'email' => [
          'fields' => [
            [
              'name' => 'createdAt',
              'short' => 'Creation timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'domain',
              'short' => 'Domain to use for the email address.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'email',
              'short' => 'The generated temporary email address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'expiresAt',
              'short' => 'Expiration timestamp of the email address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'expiry',
              'short' => 'Expiry duration for the email address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'token',
              'short' => 'Access token for managing this email address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'username',
              'short' => 'Desired username for the email address.',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'email',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/email/create',
                  'parts' => [
                    'email',
                    'create',
                  ],
                  'select' => [
                    '$action' => 'create',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'inbox' => [
          'fields' => [
            [
              'name' => 'email',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messageCount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'messages',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'inbox',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'user123@boomlify.com',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'email',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'preview',
                        'orig' => 'preview',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                        'kind' => 'query',
                        'name' => 'token',
                        'orig' => 'token',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/inbox/{email}',
                  'parts' => [
                    'inbox',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'email' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'limit',
                      'preview',
                      'token',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TempMailApiByBoomlifyFeatures::make_feature($name);
    }
}
