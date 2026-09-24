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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://boomlify.com/api/v1",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-API-Key",
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
              'title' => 'Domains',
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/domains',
                  'segments' => [
                    [
                      'lit' => 'domains',
                    ],
                  ],
                  'parts' => [
                    'domains',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'email' => [
          'fields' => [],
          'name' => 'email',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/email/create',
                  'segments' => [
                    [
                      'lit' => 'email',
                    ],
                    [
                      'lit' => 'create',
                    ],
                  ],
                  'parts' => [
                    'email',
                    'create',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [],
                  'select' => [
                    '$action' => 'create',
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
              'title' => 'Email',
              'type' => '`$STRING`',
              'format' => 'email',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messageCount',
              'title' => 'Message Count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'inbox',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/inbox/{email}',
                  'segments' => [
                    [
                      'lit' => 'inbox',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'inbox',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'email' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'email',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'user123@boomlify.com',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 20,
                      ],
                      [
                        'name' => 'preview',
                        'orig' => 'preview',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => true,
                      ],
                      [
                        'name' => 'token',
                        'orig' => 'token',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                      ],
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
