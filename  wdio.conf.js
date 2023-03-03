exports.config = {
    //...
    user: 'adarshsreeram_I8JTj7',
    key: '8pGvnvTKYhx1fHTZXoYc',
    services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                'projectName': 'Acme-Demo',
                'buildName': 'Nightly regression'
            },
        }]
    ],
    //...
  };
