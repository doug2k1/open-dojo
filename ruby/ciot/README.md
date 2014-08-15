# CIoT - CI&T Internet of Things

Sistema web para cadastro de *devices* do **The Garage** e armazenamento das informações postadas pelos mesmos.

Projeto do Dojo de [**Ruby on Rails**](http://rubyonrails.org/).

## Detalhamento técnico

### Testes automatizados

Testes usando a gem [rspec-rails](https://github.com/rspec/rspec-rails).

* `spec/models/`: Testes de models
* `spec/controllers/`: Testes de controllers
* `spec/features/`: Testes de integração (testes em alto nível, simulando um usuário navegando pelo site e usando formulários). Usa a gem [capybara](https://github.com/jnicklas/capybara)).
* `spec/views/`: Testes de views
* `spec/factories.rb`: Factories para geração de dados de testes. Usa a gem [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails).

Para executar todos os testes:

    bundle exec rspec
    
Ou um arquivo específico:

    bundle exec rspec spec/models/device_spec.rb

